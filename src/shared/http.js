import {baseurl} from './baseurl'

export const sendotp=(contactnumber)=>{

      console.log("!send otp");

      var raw={
            "to":"+918076713870"
      };

      var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            headers: {
                  "Content-Type": "application/json"
            },
            redirect: 'follow'
      };

      console.log(requestOptions.body);
          
      return fetch(baseurl+"sendSMS", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

export const verifyotp=(otp,contactnumber)=>{
      
      console.log("!verify otp");

      var raw={
            "userCode":otp,
            "to":"+918076713870"
      };

      var requestOptions = {
            method: 'POST',
            body: JSON.stringify(raw),
            redirect: 'follow'
      };
      console.log(requestOptions.body);
          
      return fetch(baseurl+"otpVerify", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}


