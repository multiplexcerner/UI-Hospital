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
            details:[],
            open: false,
        };
    }

    componentDidMount() {
        let details;
        axios.get('http://18.189.17.195:30081/hospital/all')
        .then(response => {
            details = response.data;
            console.log('Response', details);
            this.setState({ details: details });
        })
            .catch(error => {
                console.log(error);
            });

    };
    handleClick(route){
        this.props.history.push("/" + route);
    }; 
    
    //   onOpenModal = () => {
    //     this.setState({ open: true });
    //   };
    
    //   onCloseModal = () => {
    //     this.setState({ open: false });
    //   };

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
                       {/* <p> {this.state.details[0].name} </p> */}
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