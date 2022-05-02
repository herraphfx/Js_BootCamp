import React from 'react'
import Garage from 'react'

function Car(props) {
  
        return (
            <div>
                <h1>My {props.carName}</h1>
                <p>
                    It is a {props.carModel} 
                   
                </p>
                <Garage size="small" />
            </div>
            
        )
 
}

export default Car;