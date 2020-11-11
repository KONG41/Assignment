// import React, { Component, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { Dropdown,Menu,Item, Toggle,DropdownButton,ItemText } from 'react-bootstrap';
// import {Parser} from 'html-react-parser';
// class Home extends Component {
//     useData;
//     constructor(props){
//         super(props);
//         this.categoryFild = this.categoryFild.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             data:"",
//             dataList: [],
//             show:false,
//         }
//         };
     
//     categoryFild(e){
//         this.setState({
//             data: [e.target.value]
//         })
//     }

//     onSubmit(e){
//         e.preventDefault()
//         let dataList=this.state.dataList
//         dataList.push(this.state.data)

//         this.setState({
//             data:'',
//             dataList
//         })
//         console.log(this.state.dataList)
//         // localStorage.setItem('user',this.state.dataList)
//     }
    // componentDidMount(){
    //     this.useData = JSON.parse(localStorage.getItem('user'));
    //     if(localStorage.getItem('user')){
    //         this.setState(
    //             {
    //                 dataList: this.useData.dataList
    //             }
    //         )
    //     }else{
    //         this.setState(
    //             {
    //                 dataList:'',
    //             }
    //         )
    //     }
    // }
    // componentWillUpdate(nextProps, nextState){
    //     localStorage.setItem('user',JSON.stringify(nextState));
    // }

//     // componentWillUpdate(nextProps, nextState){
//     //    localStorage.setItem('user',JSON.stringify(nextState));
//     // }
//    renderOption () {
       
//      return  this.state.dataList.map((x) => (
//         <li>
//            <Link to="/Product">
//                 {x}
//             </Link>
//         </li>
//        ))
       
//     }

//     render() {

      
    
//         // categoryFild =(e) =>  {

        

//         // };                                                                       
        
//         // addCategory = () => {
          
//         // };
//         return (
//             <div className="home-con">
//                 <div className="nav-bar">
//                     <i class="fas fa-align-justify" onClick={()=>{this.setState({show:!this.state.show})}}>
//                            {
//                                     this.state.show?<ul> {this.renderOption()}  </ul>  : null
//                            }
                            
//                     </i>
                    
//                     <Link to="/product" className="logout">LogOut</Link>
//                 </div>
//                 <div className="add-box">
//                     <label>Input Category</label>
//                     <br/>
                    
//                     <input onChange={this.categoryFild} value={this.state.data} type="text"/>
//                     <br/>
//                     <button onClick={this.onSubmit}> ADD</button>
//                     <br/>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown,Menu,Item, Toggle,DropdownButton,ItemText } from 'react-bootstrap';
import {Parser} from 'html-react-parser';
class Product extends Component {
    useData;
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
         
    }
    
     componentDidMount(){
        this.useData = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.setState(
                {
                    dataList: this.useData.dataList,
                }
            )
        }else{
            this.setState(
                {
                    dataList:'',
                }
            )
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user',JSON.stringify(nextState));
    }

    
   renderOption () {
       
     return  this.state.dataList.map((x) => (
       
           <li>
                <Link to="/Product">
                        {x}
                </Link>
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
                                    this.state.show?
                                    <ul> {this.renderOption()}  </ul>  : null
                           }
                            
                    </i>
                    
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
            </div>
        );
    }
}

export default Product;