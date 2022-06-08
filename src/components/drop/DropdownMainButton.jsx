import React, {useState} from "react";

const DropdownMainButton = ({clickDropItem, setClick, click}) => {
    return (
        <div>
            <div className='click' onClick={() => setClick(!click)}>{clickDropItem}</div>
        </div>
    )
}

export default DropdownMainButton;