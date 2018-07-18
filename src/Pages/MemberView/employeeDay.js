import React, {Component} from 'react'
// Components
import EmployeeShift from './employeeShift';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeDay = ({ dayName, shifts, SetUserPreference, SaveUserPreference }) => {
    return (
        <div className="employee-day">
            <h1>{dayName}</h1>
            {shifts.map((shift) => {
                // Change logic here if availability structure changes
                let availability = shift.availabilities[0].availability;
                let id = shift.availabilities[0].id;
                let startTime = shift.startTime;
                let changed = false;
                return (
                    <EmployeeShift
                        availability={availability}
                        dayName={dayName}
                        hour={startTime}
                        id={id}
                        SetUserPreference={SetUserPreference}
                        SaveUserPreference={SaveUserPreference}
                        key={startTime}
                    />
                )
            })}
        </div>
    )
}

export default EmployeeDay