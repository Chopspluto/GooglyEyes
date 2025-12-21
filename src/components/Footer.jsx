import { useState } from 'react'
import { CiInstagram } from "react-icons/ci";

export default function Footer(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={() => setCount(count+1)}>Click here</button>
            <h1>Count: {count}</h1>
            <div>
                <CiInstagram />
            </div>
        </div>
    )
}