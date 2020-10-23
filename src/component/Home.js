import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown,Menu,Item, Toggle,DropdownButton,ItemText } from 'react-bootstrap';
import {Parser} from 'html-react-parser';
class Home extends Component {
    userData;
    constructor(props){
        super(props);
        this.categoryFild = this.categoryFild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            data:'',
        }
        };
     
    categoryFild(e){
        this.setState({
            data: e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault()
        this.setState({
            data:'',
        })
    }
    
    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));

        if(localStorage.getItem('user')){
            this.setState({
                data: this.userData.data,
            })
        }
        else{
            this.setState({
                data:'',
            })
        }
    }

    componentWillUpdate(nextProps, nextState){
       localStorage.setItem('user',JSON.stringify(nextState));
    }

    render() {

      
    
        // categoryFild =(e) =>  {

        

        // };
        
        // addCategory = () => {
          
        // };
        return (
            <div className="home-con">
                <div className="nav-bar">
                            <select  className="select"  >
                                 <option value="grapefruit">{this.state.data}</option>
                            </select>
                    <Link to="/" className="logout">LogOut</Link>
                </div>
                <div className="add-box">
                    <label>Input Category</label>
                    <br/>
                  
                    <input onChange={this.categoryFild} value={this.state.data} type="text"/>
                    <br/>
                    <button onClick={this.onSubmit}> ADD</button>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Home;