import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, ()=>{setShowContent(false)})
    return (<div ref={ref}>
        {
            showContent ? (<div>
                <h1>Content</h1>
                <p>Click outside to close.</p>
            </div>) : (<button onClick={() => setShowContent(true)}>show content</button>)
        }
    </div>
    )
}