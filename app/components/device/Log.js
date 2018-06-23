import React from 'react';
import Notifiction from "./notification/Notification";
import Slider  from 'react-slick';



class Log extends  React.Component{
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        return (
   <div>console.log('====================================');
   console.log();
   console.log('====================================');</div>
        )
    }
}

export default Log;