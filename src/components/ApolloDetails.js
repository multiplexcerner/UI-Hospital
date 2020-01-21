import React from 'react';
import axios from 'axios';
import Apollo from '../Images/logo-apollo.png';
import { render } from '@testing-library/react';
import Modal from "react-responsive-modal";
import './Details.css';



class ApolloDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
            details: {},
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

    
    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

    render(){
        const { open } = this.state;
        return(
        <div>
            <div className ="CADetails">
                <img src={Apollo}></img> 
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
                    </tr>
                    <tr>
                        <td> {this.state.details.name} </td>
                        <td>{this.state.details.description}</td>
                        <td>{this.state.details.type}</td>
                        <td>{this.state.details.price}</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                    </tr>
                    <tr>
                        <td>Package Name2</td>
                        <td>Description</td>
                        <td>package Type</td>
                        <td>250</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                    </tr>
                    <tr>
                        <td>Package Name2</td>
                        <td>Description</td>
                        <td>package Type</td>
                        <td>250</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                    </tr>
                </table>
                 <Modal className="modal" open={open} onClose={this.onCloseModal} portalClassName = "modal" > 
                    <h2>Reviews</h2>
                    <h4> ID : {this.state.reviews.userId} </h4>
                    <h4>Name : {this.state.reviews.name}  </h4>
                    <h4>Rating : {this.state.reviews.rating}  </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                    <button type="button" className="button">Schedule Appointment</button>
                    {/* <button type="button" className="button2">TEST</button> */}
              </Modal>
            </div>

        </div>

        );
    }
}
export default ApolloDetails;