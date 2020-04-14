import React from 'react'

function Greeting() {
    let hour = new Date().getHours()
    let timeOfDay

    if(hour < 12) {
        timeOfDay = 'morning'
    } else if (hour >= 12 && hour < 18) {
        timeOfDay = 'afternoon'
    } else {
        timeOfDay = 'night'
    }

    return (
        <div>
            <h1>Good {timeOfDay}!</h1>
            <h2>It is around {hour} o'clock</h2>
        </div>
    )
}

export default Greeting