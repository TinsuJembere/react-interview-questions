import { useRef } from "react"
import UseFetch from "../use-fetch"

export default function ScrollToTopAndButtom() {
    const { data, pending, error } = UseFetch('https://dummyjson.com/products?limit=100', {})
    const bottomRef = useRef(null)

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }

    if (pending) {
        return <h2>loading please wait</h2>
    }

    if (error) {
        return <h1>sorry error occured! {error}.</h1>
    }
    return <div>
        <h1>scroll top and down page</h1>
        <h2>this is the top of the page</h2>
        <button onClick={()=> handleScrollToBottom()}>scroll to button</button>
        <ul style={{ listStyle: "none" }}>
            {data && data.products && data.products.length ? data.products.map(productItem => <li>{productItem.title}</li>) : null}
        </ul>
        <div ref={bottomRef}></div>
        <h2>this is bottom of the page</h2>
        <button onClick={() => handleScrollToTop()}>scroll to top</button>
    </div>
}