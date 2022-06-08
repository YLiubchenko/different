import React, {useState} from 'react';

function Clock() {

    let [time, setTime] = useState('');

    setInterval(() => {
        let fullTime = '';
        let date = new Date();
        date = [date.getHours(), date.getMinutes(), date.getSeconds()];

        fullTime = date.map((el, index) => {
            let item = String(el).padStart(2, '0');
            if (index === 1 || !index) {
                item += ' : ';
            }

            return item;
        })

        setTime(fullTime)
    }, 1000);

    return (
        <div>
            {time}
        </div>
    );
}

export default Clock;