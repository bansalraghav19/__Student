import React , { Component } from 'react';

import './Profile.css';
// import './icon-font.css';

class Profile extends Component{

      render(){
            return(
                  <div className="container">
                        <div className="col">
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
                                    
                                    <div className="price">
                                          <div className="adjust">
                                          <p className="title">Yearly</p>
                                          <p className="sub-title">Subscription</p>
                                    </div>
                                          
                                          <p className="cost">
                                                <span class="discount">$35</span>
                                                $29.75
                                                <span class="text">/mo</span>
                                          </p>
                                    </div>
                                    <div className="_content">
                                          <p>Limited time offer for fight against COVID-19.</p>
                                          Our most popular plan previously sold for $299 and is now only $10.6/month . This plan saves you over 60% in comparison to the monthly plan.
                                          (prices are marked in USD)
                                    </div>
                                    <div className="btn">
                                          <a className="btn2" href="#">Subscribe</a>
                                    </div>
                              </div>
                        </div>
                        <div className="col">
                              <div className="card card3">card3</div>
                              <div className="card card4">card4</div>
                        </div>
                  </div>
            );
      };
}

export default Profile;