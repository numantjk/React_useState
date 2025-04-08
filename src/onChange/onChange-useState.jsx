import { useState } from "react";

function OnChange(){
    const [name,setName]=useState('');

    

const handleChangeName=(e)=>{
    setName(e.target.value);


}
return(
    <div>
     <input type="text" value={name} onChange={handleChangeName}/>
<p>Name: {name}</p>

    </div>
)




}
export default OnChange;