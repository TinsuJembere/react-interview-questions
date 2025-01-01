import UseFetch from ".";
import './styles.css'

export default function UseFetchHookTest() {
    const { data, pending, error } = UseFetch('https://dummyjson.com/products', {})
    return <div>
        <h1>use fetch hook</h1>
        {
            pending ? <h3>Pending</h3> : null
        }
        { error? <h3>sorry error occured</h3> : null}
        {
            data && data.products && data.products.length ? data.products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))
                : null
        }
    </div>
}