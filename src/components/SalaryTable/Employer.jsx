import React from 'react';
import s from './salaryTable.module.css';

function Employer({firstName, lastName, workedDays, rate, id, setSalary, salary}) {


    const countSalary = (e) => {
        if (e.target.name === 'workedDays') {
            setSalary({workedDays: e.target.value, rate});
        } else {
            setSalary({workedDays, rate: e.target.value});
        }

    }

    return (
        <div className={s.row} id={id}>
            <div className={s.cell}>{firstName}</div>
            <div className={s.cell}>{lastName}</div>
            <input type={s.number} name='workedDays' className='cell' value={salary.workedDays} onChange={countSalary}/>
            <input type={s.number} name='rate' className='cell' value={salary.rate} onChange={countSalary}/>
            <div className='cell'>{salary.workedDays * salary.rate}</div>
        </div>
    )
}

export default Employer;