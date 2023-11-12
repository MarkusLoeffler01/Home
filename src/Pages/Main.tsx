import React, { useState } from "react";
import Quote from "../Components/Home/Quote";
function Main() 
{
    const [state, setState] = useState(0);

    return <div>
        <Quote />
    </div>
}


export default Main;