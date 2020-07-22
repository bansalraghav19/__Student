import React , { Component } from 'react';

import './Profile.css';
// import './icon-font.css';
import Navbar from './navbar';
import Sidebar from './sidebar';

class Profile extends Component{

      render(){
            return(
                  <div className="container">
                        <Navbar />
                        <Sidebar />
                        <div className="col1">
                              <div className="card card1">
                                    <div className="dp">
                                          <img className="dp_img" src="./assets/dp.png"></img>
                                    </div>
                                    <div className="details">
                                          <p>Raushan Kumar</p>
                                          <p>10th Grade &diams; CBSE</p>
                                          <p><a className = "btn btn1" href="#">Change Password</a></p>
                                    </div>
                              </div>
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
                                                      <p>raghavrocking1@gmail.com</p>
                                                </li>
                                                <li>  
                                                      <label>Phone Number</label>
                                                      <p>+91 9478121646</p>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="card card2">
                                    <div className="heading">
                                          <h2>Personal Info</h2>
                                    </div>
                                    <div className="about-info">
                                          <ul>

                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      };
}

export default Profile;