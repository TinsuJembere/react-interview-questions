import { useEffect, useState } from "react"
import Suggestion from "./suggestions";
import './styles.css'

export default function SearchAuthoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);


    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
            }
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (query) => {
        query = query.toLowerCase();
        setSearchParams(query);
        if (query.length > 0) {
            const filteredData = users && users.length ?
                users.filter((items) => items.toLowerCase().startsWith(query))
                : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true)
        } else {
            setShowDropDown(false);
        }
    }
    console.log(filteredUsers)
    useEffect(() => {
        fetchListOfUsers()
    }, [])
    return <div className="select-authoComplete-container">
        {loading ? 'loading.. please wait!' :
            <input type="text" onChange={(event) => handleChange(event.target.value)} value={searchParams} placeholder="Search users here..." />
        }
        <div>
            {showDropDown ? <Suggestion data={filteredUsers} /> : null}
        </div>
    </div>
}