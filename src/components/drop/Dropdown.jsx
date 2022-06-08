import React, {useState} from "react";
import DropdownMainButton from "./DropdownMainButton";

const Dropdown = () => {

    const arr = [{
        value: 'kyky',
        isChoice: false
    }, {
        value: 'hello',
        isChoice: false
    }, {
        value: 'bye',
        isChoice: false
    }];

    const [click, setClick] = useState(false);
    const [clickDropItem, setClickDropItem] = useState('click me');

    const clickDropdownItem = (e) => {
        arr.map(el => {
            if (el.value === e.target.innerText) {
                e.target.className += 'choice';
                setClickDropItem(e.target.innerText);
            }
        })
    }

    const handleChange = () => {
        return arr.map(el => {
            let id = Math.floor(Math.random() * 10000);
            return <div key={id} className={`ky `} id={id} onClick={clickDropdownItem}>{el.value}</div>
        });
    }

    return (
        <div>
            <DropdownMainButton clickDropItem={clickDropItem} setClick={setClick} click={click}/>
            {click && handleChange()}
        </div>
    )
}

export default Dropdown;