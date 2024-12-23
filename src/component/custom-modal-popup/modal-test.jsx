import { useState } from "react";
import Modal from "./modal";

export default function ModalPopUp() {
    const [showModalPopUp, setShowModalPopUp] = useState(false);

    const handleTogglePopUp = () => {
        setShowModalPopUp(!showModalPopUp)
    }
    function onClose(){
        setShowModalPopUp(false)
    }

    return (
        <div>
            <button onClick={() => handleTogglePopUp()}>open modal pop up</button>
            {
                showModalPopUp && <Modal onClose={onClose} header={<div>hey, I'm Tinsae</div>} body={<div>Thanks for coming !</div>} footer={<div>wish you luck !</div>} />
            }
        </div>
    )
}