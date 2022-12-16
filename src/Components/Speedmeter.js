import React, { useState } from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter'
import HomePage from "./Home";
import "react-internet-meter/dist/index.css";


const Speed = () => {
    const [wifiSpeed, setwifiSpeed] = useState("Checking ... ");
    return(
      <div>
       <ReactInternetSpeedMeter  
       txtSubHeading={"Internet is too slow " + wifiSpeed + " MB/s"}
            outputType="alert"
            customClassName={null}
            txtMainHeading="Opps..." 
            pingInterval={4000} // milliseconds 
            thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
            threshold={100}
            imageUrl="https://cloudplay.jiogames.com/static/media/JioGamesCloudWhiteBeta.3da86b03fa979be909d0.png"
            downloadSize="13195"  //bytes
            callbackFunctionOnNetworkDown={(speed)=>console.log(`Internet speed is down ${speed}`)}
            callbackFunctionOnNetworkTest={(speed)=>setwifiSpeed(speed)}
          />
          
          <HomePage wifiSpeed={wifiSpeed} />
          
          </div>
    );
};

export default Speed;