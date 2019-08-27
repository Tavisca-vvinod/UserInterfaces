import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
export default class LeftDiv extends React.Component {
    handleInput = (a) => {
        var x =document.getElementById(a).innerHTML;
        document.getElementById("fname").value =x.split(" ")[0];
        document.getElementById("lname").value = x.split(" ")[1];
        document.getElementById("simply").innerHTML=a;
    }
   edit=()=>{
   		var a = document.getElementById("simply").innerHTML;
        document.getElementById(a).innerHTML= document.getElementById("fname").value+" "+ document.getElementById("lname").value;
    }
   render() {
    return     <div>
                <div id="left">
                    <ul>
                        <li><button id ="p1" onClick={() => this.handleInput("p1")}>Tapsi Katyal</button></li>
                        <li><button id="p2"  onClick={() => this.handleInput("p2")} >Ojas Pahwa</button></li>
                        <li><button id="p3" onClick={() => this.handleInput("p3")}>Dhvani Sheth</button></li>
                        <li><button id="p4" onClick={() => this.handleInput("p4")}>Varsha Vinod</button></li>
                    </ul>
                </div>
                <div id="right">
                    First Name
                    <input type="text" id="fname"/> <br />
                    Last Name
                    <input type="text" id="lname"/> <br />
                    <p id="b">
                    <button id="b1"  onClick={()=>this.edit()} > Update </button>
                    <p id="simply">
                    </p>
                    </p>

                </div>
               </div>
  }
}

ReactDOM.render(<LeftDiv />, document.getElementById('root'));