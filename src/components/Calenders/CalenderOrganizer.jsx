import React from "react";
import Calendar from "react-calendar";


export function CalenderOrganizer() {


    return (
        <div>
            <Calendar onClickDay={(e) => console.log(e)}/>
        </div>
    )

}