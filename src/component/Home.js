import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown,Menu,Item, Toggle,DropdownButton,ItemText } from 'react-bootstrap';
import {Parser} from 'html-react-parser';
class Home extends Component {
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
              {
                  this.state.show? <div><h1>Hide and Show</h1></div> : null
              }
              <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>
          </div>
        </header>
      </div>
    );
  }
    userData;
    constructor(props){
        super(props);
        this.categoryFild = this.categoryFild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            data:"",
            dataList: [],
            show:true
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
        // ReactDOM.render(<option value="grapefruit">{this.state.data}</option>, document.getElementById('option'));
        
        })
        console.log(this.state)
    }
    
    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));

        if(localStorage.getItem('user')){
            this.setState({
                data: this.state.dataList,
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
   renderOption () {
       
     return  this.state.dataList.map((x) => (
        <li>
            <a>
                {x}
            </a>
        </li>
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
                    <i class="fas fa-align-justify" onClick={()=>{this.setState({show:!this.state.show})}}>
                           {
                                    this.state.show?<ul> {this.renderOption()}  </ul>  : null
                           }
                            
                    </i>
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