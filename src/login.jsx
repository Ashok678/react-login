import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
     const [password, setpassword] = useState("");

     const [Entry, setEntry] = useState([]);
    
     const navigateWeather = ()=>{
        navigate("/Tempapp");
     }
     const submitForm = (input) => {
        input.preventDefault();

        const newEntry ={email, password};

        setEntry ([...Entry, newEntry]);


        setemail("");
        setpassword("");

     }

   
    return (
        <>
     <div className="container">
     <form action="">
        <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" value={email} id = "email" onChange={(e) => setemail (e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label><br />
            <input type="text" value={password} id = "password" onChange={(e) => setpassword (e.target.value)} />
        </div>
        <button onClick={submitForm}>Submit</button>
        <button id="btn1" >clear</button>
        <button onClick={navigateWeather}>login</button>
      </form>
      
     </div>
      <div>
        {
            Entry.map((curElem) => {
                return(
                    <div className='showDataStyle'>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>

                    </div>

                )
            })
        }
      </div>
        </>
    )
}

export default Login