import { useEffect, useState } from "react";
import User from "./card";
import './styles.css';

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("tinsuJembere");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    setError(false);  
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (res.status === 404) {
        setError(true);
        setUserData(null);
      } else {
        const data = await res.json();
        setUserData(data);
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError(true);
      setUserData(null);
    } finally {
      setLoading(false);
      setUserName('');
    }
  }

  function handleSubmit() {
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {error ? (
        <h3>Sorry, user not found!</h3>
      ) : (
        userData && <User user={userData} />
      )}
    </div>
  );
}