import React, { useState } from 'react';
import './login.css'

export const Login = (props) => {
    const [email, setemail] = useState("");
     const [password, setpassword] = useState("");

     const [AllEntry, setAllEntry] = useState([]);
     const submitForm = (e) => {
        e.preventDefault();

        const newEntry ={email, password};

        setAllEntry ([AllEntry, newEntry]);
        console.log( AllEntry);

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
      </form>
     </div>
      <div>
        {
            AllEntry.map((curElem) => {
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