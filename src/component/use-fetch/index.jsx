import { useEffect, useState } from "react";

export default function UseFetch(url, options={}){
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null)

    const fetchUrl = async()=>{
        setPending(true)
        try{
            const response = await fetch(url, {...options});
            if(!response.ok) throw new error(response.statusText)
            const result = await response.json()
            setData(result);
            setError(null)
            setPending(false)
        }catch(e){
            setError(`${e}. some error occured`)
        }
    }
    useEffect(()=>{
        fetchUrl()
    }, [url])

    return {data, pending, error}
}