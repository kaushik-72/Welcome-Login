import React, { useState } from "react";
import Welcome from "./Welcome";


function Login(){
    const [name, setName] = useState(null);
    const [set, setN] = useState(false);
    
    
    function getName(val){        
        setName(val.target.value);
    }
    function getNaam(){
        setN(true);
    }

    return (
        <div>
            {set ? null: <div className="login">
                <h1 className="display-6"><b>Login Page</b></h1><br/>
                <input type="text" placeholder="First name" className="form-control" onChange={getName} required="" autoFocus={true} /> <br />
                
                <button type="button" className="btn btn-primary"onClick={getNaam} background-color>Submit</button> </div>}
            {set ? <Welcome name={name} /> : null}
        </div>
    );
}

export default Login;