import React from 'react';
import axios from 'axios';
import Modal from "react-responsive-modal";
import CAlogo from '../Images/ca-logo.png';
import asterlogo from '../Images/asterlogo.png';
import fortislogo from '../Images/fortis-logo.png';
import apollologo from '../Images/logo-apollo.png';
import './Cars.css';

var Images;


class Cars extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            imageURL:'',
            open: false,
        };
    }

//     componentDidMount(){

//         axios.get('http://localhost:8082/get-docker-image')
//         .then(response => {
//             console.log('Response url', response.data);
//             this.setState({imageURL: response.data});
//         })
//         .catch(error => {
//             console.log(error);
//         });
       
//    };
    handleClick(route){
        this.props.history.push("/" + route);
    }; 
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {
        const { open } = this.state;
        const { imageURL } = this.state;
        return(
            <div className="CarsBody"> 
              <div>
                  <h1>Search Among Below Hospitals</h1>
              </div>
              <div className="row">
                  <div className="col-4">
                      <img src={CAlogo} height="100" width="300" onClick={() => this.handleClick('details')}></img>
                       <p>Address: abasgdhbfhjanbahan,msinfhs</p>
                  </div>
                  <div className="col-4">
                      <img src={asterlogo} height="100" width="300" onClick={() => this.handleClick('asterDetails')}></img>
                  </div>
                  <div className="col-4">
                      <img src={fortislogo} height="100" width="300" onClick={() => this.handleClick('fortisDetails')}></img>
                  </div>
              </div>
              <div className="row">
                  <div className="col-4">
                      <img src={apollologo} height="120" width="300" onClick={() => this.handleClick('apolloDetails')}></img>
                  </div>
              </div>
            </div>
          );
    }
}

export default Cars;