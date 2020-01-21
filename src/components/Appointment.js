import React from 'react';
import Loader from '../Images/Loading_icon.gif';
import './Appointment.css'


class Appointment extends React.Component {

    render() {
        return(
            <div>
                <div><img src={Loader} alt="Loader_Icon" height="400" className="loader" /></div>
            </div>
        );
    }

}
export default Appointment;