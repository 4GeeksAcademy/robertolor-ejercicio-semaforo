import React, { useState } from "react";


const SelectedLight = () => {

    const [light, setLight] = useState(false);
    const lightState = () => {
        setLight(!light)
    }

    const [light2, setLight2] = useState(false);
    const lightState2 = () => {
        setLight2(!light2)
    }

    const [light3, setLight3] = useState(false);
    const lightState3 = () => {
        setLight3(!light3)
    }

    return (
        <div className="container traffic-light p-2 bg-dark mt-2">
            <div className={`circulo ${light ? "red-selected" : "red"}`} onClick={lightState}>  </div>

            <div className={`circulo ${light2 ? "yellow-selected" : "yellow"}`} onClick={lightState2}></div>

            <div className={`circulo ${light3 ? "green-selected" : "green"}`} onClick={lightState3}></div>

        </div>

    )
}

export default SelectedLight

/*  */