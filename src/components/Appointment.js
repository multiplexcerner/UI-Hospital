import React from 'react';
import Loader from '../Images/Loading_icon.gif';
import './Appointment.css';
import Success from '../Images/success.gif';


class Appointment extends React.Component {

    render() {
        return(
            <div>
                <div className="appointment"><img src={Success} alt="Loader_Icon" height="400" className="loader" />
                <h2>You have successfully scheduled an appointment!!</h2>
                <h5>You will be contacted by the hospital soon.</h5>
                </div>
            </div>
        );
    }

}
export default Appointment;