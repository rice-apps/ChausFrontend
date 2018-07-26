import React, { PureComponent } from 'react';
import { Subheader } from 'material-ui';
// Material UI
// SASS
import '../css/masterPage.scss';

const ScheduleTimes = () => {
    const createTimeSlots = () => {
        var timeSlots = [];
        for (var slot = 6; slot <= 24; slot++) {
            var displayedTime;
            if (slot < 12) {
                displayedTime = slot.toString() + ":55 AM";
            }
            else if (slot >= 12 && slot != 24) {
                displayedTime = slot % 12;
                displayedTime = displayedTime.toString() + ":55 PM";
            }
            else {
                displayedTime = "Close";
            }
            timeSlots.push(
                <React.Fragment>
                    <span className="master-times-title">{displayedTime}</span>
                </React.Fragment>
            );
        };
        return timeSlots;
    }
    return (
        <div className="master-times">
            {createTimeSlots()}
        </div>
    )
}

export default ScheduleTimes;