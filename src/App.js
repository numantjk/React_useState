import {useState, useEffect} from 'react'
import './app.css'

function App() {
  const [count,setCount]=useState(0);
  const [color,setColor]=useState("gray")
    console.log(count)
;
const getRandomColor=()=>{
  const letters='0123456789ABCDEF'
  let color='#';
  for (let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)]
  }
  console.log('RGB color :',color)
  return color;

}
const updateColor = () => {
  setColor(getRandomColor());  // Set random color
};
  // Use useEffect to update body background color whenever color changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);


  return (
    <div className="App">
      {/* <p>number: {count}</p> */}
    <button className="count" onClick={()=> { setCount(count + 1); updateColor(); }}>click here: {count}</button><br/>
    </div>
  );
}

export default App;  
