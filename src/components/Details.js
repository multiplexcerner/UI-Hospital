import React from 'react';
import axios from 'axios';
import CAlogo from '../Images/ca-logo.png';
import { render } from '@testing-library/react';
import Modal from "react-responsive-modal";
import './Details.css';



class Details extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            open: false,
            details: {},
            details2: {},
            reviews: {},
        };
    };

    componentDidMount() {
        let details;
        axios.get('http://18.217.149.46:30082/package/1')
            .then(response => {
                details = response.data;
                console.log('Response', details);
                this.setState({ details: details });
            })
            .catch(error => {
                console.log(error);
            });
        
        let details2    
        axios.get('http://18.217.149.46:30082/package/2')
            .then(response => {
                details2 = response.data;
                console.log('Response', details2);
                this.setState({ details2 : details2 });
            })
            .catch(error => {
                console.log(error);
            });


        let reviews;
        axios.get('http://18.217.149.46:30084/rating/1')
            .then(response => {
                reviews = response.data;
                console.log('Response', reviews);
                this.setState({ reviews: reviews });
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleClick(route){
        this.props.history.push("/" + route);
    }; 


    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

    render(){
        const { open } = this.state;
        console.log('response' , this.state.details)
        // const { details } = this.state; // Actual code
        const details = [{"id":1,"name":"BASIC HEALTH SCREENING","description":"BASIC HEALTH SCREENING","type":"Body Vitals","price":"200","procedures":["Blood","Cholestrol","Sugar","Keratine"],"hospitalId":1},{"id":2,"name":"BASIC HEART CHECK","description":"BASIC HEART CHECK","type":"Cardiac","price":"150","procedures":["X-Ray","ESR"],"hospitalId":1},{"id":3,"name":"PRE CONCEPTION PACKAGE","description":"PRE CONCEPTION PACKAGE","type":"Gynecologist","price":"200","procedures":["Blood Grouping and Rh Factor","Blood Sugar - Fasting","Urine Routine"],"hospitalId":1},{"id":4,"name":"COMPREHENSIVE DIABETIC HEALTH CHECK","description":"COMPREHENSIVE DIABETIC HEALTH CHECK","type":"Diabetic-Basic","price":"150","procedures":["Serum Electrolytes","Serum Alkaline Phosphatase","Serum Phosphorus"],"hospitalId":1},{"id":5,"name":"EXECUTIVE DIABETIC HEALTH CHECK","description":"COMPREHENSIVE DIABETIC HEALTH CHECK","type":"Diabetic-Executive","price":"150","procedures":["Serum Electrolytes","Serum Creatinine","Blood Urea Nitrogen"],"hospitalId":1},{"id":6,"name":"SENIOR CITIZEN’S PROFILE","description":"SENIOR CITIZEN’S PROFILE","type":"Senior Citizens","price":"150","procedures":["Pap Smear (Females)","TMT or Echo","ECG"],"hospitalId":1}];
        
        return(
        <div>
            <div className ="CADetails">
                <img src={CAlogo}></img> 
            </div>
            <div className="details">
                <h2>Details:</h2>
                <table className="DetailsTable">
                    <tr>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Price($)</th>
                        <th>Reviews</th>
                        <th>Appointment</th>
                    </tr>
                    {
                        details.map(({ name, description, type, price }) => {
                            return (
                            <tr>
                                <td> {name} </td>
                                <td>{description}</td>
                                <td>{type}</td>
                                <td>{price}</td>
                                <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                                <td><button className="btn"  onClick={() => this.handleClick('appointment')}>Schedule Appointment</button></td>
                            </tr>
                            );
                        })
                    }
                </table>
                 <Modal className="modal" open={open} onClose={this.onCloseModal} portalClassName = "modal" > 
                    <h2>Reviews</h2>
                    <h4> ID : {this.state.reviews.userId} TS123476 </h4>
                    <h4>Name : {this.state.reviews.name} Tony Stark  </h4>
                    <h4>Rating : {this.state.reviews.rating} 7 </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                    {/* <button type="button" className="button">Schedule Appointment</button> */}
                    {/* <button type="button" className="button2">TEST</button> */}
              </Modal>
            </div>

        </div>

        );
    }



}
export default Details;