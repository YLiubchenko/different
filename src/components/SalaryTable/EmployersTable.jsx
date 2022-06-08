import React, {useEffect, useState} from 'react';
import Employer from "./Employer";

const EmployersTable = ({employers, setEmployersTable}) => {

    let salarySum = 0;

    let [salary, setSalary] = useState({
        workedDays: '',
        rate: ''
    });

    useEffect(() => {
        setEmployersTable(salarySum);
    }, [salary]);

    return employers.map(employer => {
        salarySum += (employer.workedDays * employer.rate);
        let keys = Math.floor(Math.random() * 10000);

        return <Employer key={keys}
                         id={keys}
                         firstName={employer.firstName}
                         lastName={employer.lastName}
                         workedDays={employer.workedDays}
                         rate={employer.rate}
                         setEmployersTable={setEmployersTable}
                         salarySum={salarySum}
                         setSalary={setSalary}
                         salary={salary}/>
    });
}


export default EmployersTable;