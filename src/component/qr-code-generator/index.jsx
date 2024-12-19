import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';

export default function QRCodeGenerator(){
    const [qrcode, setQrcode] = useState("");
    const [input, setInput] = useState("")
    const handleQrChange=()=>{
        setQrcode(input);
        setInput('')
    }
    return <div color="qr-container">
        <h1>QRCode Generator</h1>
        <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} name="qr-input" placeholder="Enter your Value"/>
        <button disabled={input && input.trim !== ''? false : true} onClick={()=>handleQrChange()}>Generate</button>
        </div>
        <div>
        <QRCode id="qr-code-value" value={qrcode} size={300} bgColor="#fff"/>
        </div>
    </div>
}