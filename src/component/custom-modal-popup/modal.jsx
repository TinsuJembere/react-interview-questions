import './styles.css'
export default function Modal({ id, header, body, footer , onClose}) {
    return (
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                <h2>{header ? header : "Header"}</h2>
                <span className="close-modal-icon" onClick={onClose}>&times;</span>
                </div>
                <div className="body">
                    {body ? body : "this is the body"}
                </div>
                <div className='footer'>
                    {footer ? footer : "Footer"}
                </div>
            </div>
        </div>
    )
}