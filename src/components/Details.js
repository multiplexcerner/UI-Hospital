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
        axios.get('http://18.189.17.195:30082/package/1')
            .then(response => {
                details = response.data;
                console.log('Response', details);
                this.setState({ details: details });
            })
            .catch(error => {
                console.log(error);
            });
        
        let details2    
        axios.get('http://18.189.17.195:30082/package/2')
            .then(response => {
                details2 = response.data;
                console.log('Response', details2);
                this.setState({ details2 : details2 });
            })
            .catch(error => {
                console.log(error);
            });


        let reviews;
        axios.get('http://18.189.17.195:30084/rating/1')
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
        console.log('response' , this.state.details.name)
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
                    <tr>
                        <td> {this.state.details.name} </td>
                        <td>{this.state.details.description}</td>
                        <td>{this.state.details.type}</td>
                        <td>{this.state.details.price}</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                        <td><button className="btn"  onClick={() => this.handleClick('appointment')}>Schedule Appointment</button></td>
                    </tr>
                    <tr>
                        <td>{this.state.details2.name} </td>
                        <td>{this.state.details2.description}</td>
                        <td>{this.state.details2.type}</td>
                        <td>{this.state.details2.price}</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                        <td><button className="btn"  onClick={() => this.handleClick('appointment')}>Schedule Appointment</button></td>
                    </tr>
                    <tr>
                        <td>Eye care</td>
                        <td>Overall Eye Checkup</td>
                        <td>General Checkup</td>
                        <td>230</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                        <td><button className="btn"  onClick={() => this.handleClick('appointment')}>Schedule Appointment</button></td>
                    </tr>
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