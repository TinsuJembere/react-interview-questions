import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );

            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
            }
            console.log(data)
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    console.log(products)
    useEffect(() => { fetchData() }, [count]);
    useEffect(() => {
        if (products && products.length === 100) { setDisableBtn(true) };
    }, [products])
    if (loading) {
        return <div>Loading! please wait.</div>
    }
    if (errorMsg !== null) {
        return <div>Error occurred: {errorMsg}</div>;
    }


    return <div className="load-more-container">
        <div className="product-container">
            {products && products.length ? products.map((item) => (<div className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
            </div>)) : null}
        </div>
        <div className="button-container">
            <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load More</button>
            {disableBtn ? <p>You have reached to 100 products</p> : null}
        </div>
    </div>
}