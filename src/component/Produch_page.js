import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown,Menu,Item, Toggle,DropdownButton,ItemText } from 'react-bootstrap';
import {Parser} from 'html-react-parser';
class Product extends Component {
  
    constructor(props){
        super(props);
        this.categoryFild = this.categoryFild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            data:"",
            dataList: [],
            show:false,
        }
        };
     
    categoryFild(e){
        this.setState({
            data: [e.target.value]
        })
    }

    onSubmit(e){
        e.preventDefault()
        let dataList=this.state.dataList
        dataList.push(this.state.data)

        this.setState({
            data:'',
            dataList
        })
        console.log(this.state.dataList)
        localStorage.setItem('user',this.state.dataList)
        localStorage.getItem('user',this.state.dataList)
         
    }
    
   

    
   renderOption () {
       
     return  this.state.dataList.map((x) => (
       <div className="product_box">
             {x}
        </div>
       
       ))
       
    }

    render() {

      
    
        // categoryFild =(e) =>  {

        

        // };                                                                       
        
        // addCategory = () => {
          
        // };
        return (
            <div className="home-con">
                <div className="nav-bar">
                    {/* <i class="fas fa-align-justify" onClick={()=>{this.setState({show:!this.state.show})}}>
                           {
                                    this.state.show?
                                    <ul> {this.renderOption()}  </ul>  : null
                           }
                            
                    </i> */}
                    
                    <Link to="/" className="logout">LogOut</Link>
                </div>
                <div className="add-box">
                    <label>Input Product</label>
                    <br/>
                    
                    <input onChange={this.categoryFild} value={this.state.data} type="text"/>
                    <br/>
                    <button onClick={this.onSubmit}> ADD</button>
                    <br/>
                </div>
                <div className="product_con">
                    {this.renderOption()}
                </div>
            </div>
        );
    }
}

export default Product;