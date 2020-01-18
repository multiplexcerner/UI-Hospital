import React, {Component}  from 'react';
import image from '../Images/care.png'
import image2 from '../Images/wallpaper.jpg'

import './HomePage.css';

export class HomePage extends Component{

    constructor(props){
        console.log('Initial props: ', props);
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () =>{
    this.props.history.push("/hospitalDetails");
    }; 
    render(){
            return(
               <div>
                <div class="topnav"> 
                    <h3>SmartCare</h3>
                    <a href="hospitalDetails">Health Plan Packages</a>
                    <a href="#about">About</a>
                    <a class="active" href="">Home</a>
                </div> 
                <div className="banner">
                    <img src={image2} width= "100%" height="687" ></img>
                </div>
              </div>    
            );  
    }

}
export default HomePage;