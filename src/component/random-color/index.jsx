import {useState, useEffect} from "react";

export default function RandomColor(){
    const [type, setType] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }
    const handleRandomRgbColor = () => {
        const r  = randomColorUtility(256);
        const g  = randomColorUtility(256);
        const b  = randomColorUtility(256);
        const rgb = `rgb(${r}, ${g}, ${b})`;

        setColor(rgb);
    }

    const handleRandomHexColor = () => {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexcode = '';
        for(let i=0; i < 6; i++){
            hexcode += hex[randomColorUtility(hex.length)]
        };

        setColor(`#${hexcode}`);
    }

    useEffect(()=>{
if(type === 'rgb'){handleRandomRgbColor()}
else{handleRandomHexColor()}
    }, [type])
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
           
        }}>
            <div style={{
                display: "flex",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button onClick={() => setType('rgb')}>create rgb color</button>
                <button onClick={() => setType('hex')}>create hex color</button>
                <button onClick={
                    type === 'hex' ? handleRandomHexColor : handleRandomRgbColor
                }>change color</button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                fontSize: '30px'
            }}>
                <h3>{type}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}