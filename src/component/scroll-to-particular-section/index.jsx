import { useRef } from 'react'
import './styles.css'
export default function ScrollToParticularSection(){
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    const fifthRef = useRef(null);

    const sectionRefs = [firstRef, secondRef, thirdRef, fourthRef, fifthRef];

    const data = [
        {
            label: "first section",
            style: {
                width: "100%",
                height: "500px",
                backgroundColor: "#FFCDB2"
            },
            ref: firstRef
        },
        {
            label: "second section",
            style: {
                width: "100%",
                height: "500px",
                backgroundColor: "#FFB4A2"
            },
            ref: secondRef
        },
        {
            label: "third section",
            style: {
                width: "100%",
                height: "500px",
                backgroundColor: "#E5989B"
            },
            ref: thirdRef
        },
        {
            label: "fourth section",
            style: {
                width: "100%",
                height: "500px",
                backgroundColor: "#B5838D"
            },
            ref: fourthRef
        },
        {
            label: "fifth section",
            style: {
                width: "100%",
                height: "500px",
                backgroundColor: "#6D6875"
            },
            ref: fifthRef
        }
    ];
    

    const handleScrollToFirstSection = ()=>{
        firstRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleScrollToSecondSection = ()=>{
        secondRef.current.scrollIntoView({ behavior: "smooth" })
    }
    const handleScrollToThirdSection = ()=>{
        thirdRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleScrollToFourthSection = ()=>{
        fourthRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleScrollToFifthSection = ()=>{
        fifthRef.current.scrollIntoView({ behavior: "smooth" })
    }



    return <div style={{width: "100%"}}>
        <h1>scroll to particular section page</h1>
        <ul style={{marginRight: "20px"}} className='sctoll-btns'>
        <button onClick={()=>handleScrollToFirstSection()}>scroll to first section</button>
        <button onClick={()=>handleScrollToSecondSection()}>scroll to second section</button>
        <button onClick={()=>handleScrollToThirdSection()}>scroll to third section</button>
        <button onClick={()=>handleScrollToFourthSection()}>scroll to fourth section</button>
        <button onClick={()=>handleScrollToFifthSection()}>scroll to fifth section</button>
        </ul>
        {
            data.map((dataItem)=>(
                <div ref={dataItem.ref} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>
            ))
        }
    </div>
}