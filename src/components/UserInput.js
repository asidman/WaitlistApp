import React, { Component } from 'react'

class UserInput extends Component {
    constructor(props){
        super(props);
        this.state={
            First: '',
            Last: '',
            Phone: '',
            Email: '',
        };
        
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmitphone = this.handleSubmitphone.bind(this);
    //     this.handleSubmitemail = this.handleSubmitemail.bind(this);

    //     this.handleSubmit = this.handleSubmit.bind(this);
    
    //   }
    //   //Should call the fetchTypeSetting
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    

     handleSubmit(e)  {
        this.setState({
            First: e.target.value,
            Last: e.target.value,
            Phone: e.target.value,
            Email: e.target.value,
            
    
        });

      console.log(this.state.First);
      console.log(this.state.Last);
      console.log(this.state.Phone);
      console.log(this.state.Email);

      }
    //   handleSubmitlast(event) {
    //     this.setState({
    //         Last: event.target.value,
    //     });
    //   }
      
    //   handleSubmitphone(event) {
    //     this.setState({
    //         Phone: event.target.value,
    //     });
    //   }
    //   handleSubmitemail(event) {
    //     this.setState({
    //         Email: event.target.value,
    //     });
    //     console.log(this.email);
    //   }
      
      
      

    fetchTypeSetting(){
        
        let jsonbody = {
            "first_name": this.state.First,
            "last_name": this.state.Last,
            "phone_num": this.state.Phone,
            "email": this.state.Email
        }
    
    
    
    
        fetch('http://localhost:8080/Customers', {
            method: 'post',
            
            body: JSON.stringify(jsonbody)
        })
    }
    
    
    
    render() {
        return (
        
    <form onSubmit={this.handleSubmit}>
        <div class="container">
            <h1>Signup for Waitlist</h1>
    

    <label for="firstname"><b>First Name</b></label>
    <input type="text" placeholder="First" className="email" id="first" input= {this.state.First} onChange={this.handleChange} required/>

    <label for="lastname"><b>Last Name</b></label>
    <input type="text" placeholder="Last" className="psw" id="last" input= {this.state.Last} onChange={this.handleChange} required/>

    <label for="phonenum-repeat"><b>Phone Number</b></label>
    <input type="text" placeholder="Enter Number" className="psw-repeat" id="number" input= {this.state.Phone} onChange={this.handleChange} required/>
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" className="email" id="email" input= {this.state.Email} onChange={this.handleChange} required/>
    
    <button type="submit" value="Submit"  onChange={this.handleSubmit}>Submit</button>
  </div>
</form>

        )
    
    
    }
}

      
 


export default UserInput;