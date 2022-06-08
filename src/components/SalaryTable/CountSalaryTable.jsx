import React, {useState} from 'react';
import s from './salaryTable.module.css';
import EmployersTable from "./EmployersTable";

function CountSalaryTable() {
    let [employersTable, setEmployersTable] = useState('')

    const employers = [{
        firstName: 'Ihor', lastName: 'Moch', workedDays: 21, rate: 75
    }, {
        firstName: 'Mania', lastName: 'Kykddd', workedDays: 25, rate: 30
    }, {
        firstName: 'Yana', lastName: 'Luiiii', workedDays: 21, rate: 65
    }, {
        firstName: 'Tania', lastName: 'Hlkmlknkn', workedDays: 25, rate: 80
    }, {
        firstName: 'Dadik', lastName: 'LSsssssss', workedDays: 21, rate: 30
    }, {
        firstName: 'Dashs', lastName: 'lojlljlj', workedDays: 25, rate: 55
    }];

    return (
        <div>
            <div className={s.table}>
                <div className={s.row}>
                    <div className={s.cell}>First name</div>
                    <div className={s.cell}>Last name</div>
                    <div className={s.cell}>workedDays</div>
                    <div className={s.cell}>rate</div>
                    <div className={s.cell}>salary</div>
                </div>

                <EmployersTable employers={employers} setEmployersTable={setEmployersTable}/>
            </div>
            {employersTable}
        </div>
    )
}

export default CountSalaryTable;