import { useState } from "react";


function ColorOnChange() {
    const [color,setColor]=useState('teal')


    const handleColorChange=(e)=>{
        setColor(e.target.value)

    }
    return(
        <div>
        <h1>Color Picker</h1>
        <div className="colorChange" style={{backgroundColor:color,
                padding: "20px",
                borderRadius: "8px",
                display: "inline-block",
                minWidth: "200px",
                color: "white",
        }}>
        <p>Selected color:{color}</p>

        </div>
        <br/>
        <label>Color Selector:</label>
        <div>
        <input type="color" value={color} onChange={handleColorChange}/>
        </div>
        </div>
    );
}
export default ColorOnChange;