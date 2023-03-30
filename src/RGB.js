import {useState} from "react";
function RGB(){
    const [color,setColor]=useState("black");
    return(
        <div style={{color:color}}>
            <h1>VVIT</h1>
            <button onClick={()=>setColor("red")}>Red</button>
            <button onClick={()=>setColor("green")}>Green</button>
            <button onClick={()=>setColor("blue")}>Blue</button>
        </div>
    );
}
export default RGB;
