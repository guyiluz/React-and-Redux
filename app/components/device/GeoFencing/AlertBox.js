import React, {Component} from 'react'
import AlertContainer from 'react-alert'
class AlertBox extends Component {


  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 50000,
    transition: 'scale'
  }
 


  showAlert = () => {
    this.msg.show('Save', {
      time: 200000,
      type: 'success'
    })
  }


  componentDidMount() {
    this.showAlert()
  }
      
          render() {
        
    
            return (
              <div>
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions}  />

            </div>
          
            );
          }
        }
        
        export default AlertBox;
        
