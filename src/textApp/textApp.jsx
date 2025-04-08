import { useState } from "react";
import './textApp.css'



function Text(){
	const [text, setText] = useState("Guest");
	const [color,setColor]=useState("black");


	//random color change function:
	const getRandomColor=()=>{
		const letters='0123456789ABCDEF'
		let color='#';
		for (let i=0;i<6;i++){
			color+=letters[Math.floor(Math.random()*16)]
		}
		console.log('RGB color :',color)
		return color;

	}



	const updateText=()=>{
		setText("Hello Numan!")
		setColor(getRandomColor())
		console.log(text)
	}
	return(
		<button className="text" style={{backgroundColor:color,
		}} onClick={updateText}>set Text:{text}</button>

	)
}
export default Text;