import React from 'react';
import Apollo from '../Images/logo-apollo.png';
import { render } from '@testing-library/react';
import Modal from "react-responsive-modal";
import './Details.css';



class ApolloDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
        };
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
                        <th>Package names</th>
                        <th>Teatments Included</th>
                        <th>Reviews</th>
                    </tr>
                    <tr>
                        <td>Package1</td>
                        <td>Healthcheckup1</td>
                        <td><button className="btn" onClick={this.onOpenModal}>Review1</button></td>
                    </tr>
                    <tr>
                        <td>Package2</td>
                        <td>Healthcheckup1</td>
                        <td>Review1</td>
                    </tr>
                    <tr>
                        <td>Package3</td>
                        <td>Healthcheckup1</td>
                        <td>Review1</td>
                    </tr>
                </table>
                 <Modal className="modal" open={open} onClose={this.onCloseModal} portalClassName = "modal" > 
                    <h2>Reviews</h2>
                    <h4>Name: Mike Ross   Age: 30</h4>
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