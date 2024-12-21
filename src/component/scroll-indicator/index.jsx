import { useEffect, useState } from "react";
import './styles.css'

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setData(data.products);
            }
            setLoading(false);
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    const handleScrollPercentage = () => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        setScrollPercentage((howMuchScrolled / height) * 100);
    }
    useEffect(() => {
        if (url && url !== "") {
            fetchData(url);
        }
    }, [url]);
console.log(scrollPercentage)
    useEffect(
        () => {
            window.addEventListener('scroll', handleScrollPercentage);
            return window.removeEventListener('scroll', () => { })
        }, []
    )
    if (errorMsg) {
        return <div>Error! {errorMsg}</div>;
    }

    if (loading) {
        return <div>Loading data! Please wait</div>;
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}></div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length
                    ? data.map((dataItem) => (
                        <div key={dataItem.id}>{dataItem.title}</div>
                    ))
                    : null}
            </div>
        </div>
    );
}

