import React , { Component } from 'react';

import './Profile.css';
// import './icon-font.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Form from './Form';

class Profile extends Component{

      constructor(props) {
            super(props)
      
            this.state = {
                  rawData: {}
            }
            this.uploadFile = this.uploadFile.bind(this)
      }
      
      uploadFile(event) {
            var myHeaders = new Headers();
            myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxZjJkM2E3NTM4YzJkN2FlNDQ0ZWMiLCJpYXQiOjE1OTQwNjAwNjV9.9-D9sxfYjvrxzibd-_rfZ-XAVrrZF2IWNg8bnhVl5eg");

            var formdata = new FormData();
            formdata.append("subject", "Maths");
            formdata.append("sampleFile", document.getElementById("myFile").files[0],document.getElementById("myFile").value);

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: formdata,
                  redirect: 'follow'
                  };

            fetch("https://education4all.herokuapp.com/uploadDP", requestOptions)
                  .then(response => response.json())
                  .then(result => {
                        console.log(result)
                        let obj = this.state.rawData
                        obj.profilePic = "https://education4all.herokuapp.com/uploads/" + result.name
                        this.setState({
                              rawData: obj
                        })
                  })
                  .catch(error => console.log('error', error));
      }
      componentDidMount() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"phone":"+918076713870","password":"dhruva"});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
            fetch("https://education4all.herokuapp.com/login", requestOptions)
            .then(response => {
                        response.json().then((data) => {
                              localStorage.token = data.token
                              data["tup"].profilePic = "https://education4all.herokuapp.com/uploads/" + data["tup"].profilePic
                              this.setState({
                                    rawData: data["tup"]
                              }, () => {
                                    console.log(this.state.rawData)
                              })
                        })
                  }
            )
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
      }

      render(){
            return(
                  <div className="wrapper">
                        <Navbar />
                        <div className="container">
                              <Sidebar />
                              <div className="content">

                                    <div className="col1">
                                          <div className="card card1">
                                                <div className="dp">
                                                      <img className="dp_img" src={this.state.rawData.profilePic}></img>
                                                </div>
                                                <div className="details">
                                                      <p>{this.state.rawData.userName}</p>
                                                      <p>{this.state.rawData.class}th Grade &diams; {this.state.rawData.board}</p>
                                                      <p><a className = "btn btn1" href="#">Change Password</a></p>
                                                </div>
                                          </div>
                                          <input type="file"  onChange={this.uploadFile} id="myFile" name="filename"/>
                                          <div className="card card2">
                                                <div className="price-header">
                                                      <div className="adjust">
                                                            <p className="title">Yearly</p>
                                                            <p className="sub-title">Subscription</p>
                                                      </div>
                                                      <div className="cost">
                                                            <span class="discount">$35</span>
                                                            $29.75
                                                            <span class="text">/mo</span>
                                                      </div>
                                                </div>
                                                
                                                <div className="plan-details">
                                                      <div className="_content">
                                                            <span>Limited time offer for fight against COVID-19.</span>
                                                            <p>Our most popular plan previously sold for $299 and is now only $10.6/month . This plan saves you over 60% in comparison to the monthly plan.
                                                            (prices are marked in USD)</p>
                                                      </div>
                                                      <div className="btn">
                                                            <a className="btn2" href="#">Subscribe</a>
                                                      </div>
                                                </div>
                                          </div>
                                          
                                    </div>
                                    <div className="col2">
                                          <div className="card card1">
                                                <div className="heading">
                                                      <h2>Account Info</h2>
                                                </div>
                                                <div className="about-info">
                                                      <ul>
                                                            <li>
                                                                  <label>Email</label>
                                                                  <p>{this.state.rawData.userName}</p>
                                                            </li>
                                                            <li>  
                                                                  <label>Phone Number</label>
                                                                  <p>{this.state.rawData.phone}</p>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                          <div className="card card2">
                                                <div className="heading">
                                                      <h2>Personal Info</h2>
                                                </div>
                                                <div className="about-info">
                                                      <Form />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      };
}

export default Profile;