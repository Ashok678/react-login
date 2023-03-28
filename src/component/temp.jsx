import React,{useEffect, useState} from "react";
import"./style.css";

const Tempapp = () => {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("kathmandu")

    useEffect(() =>{

        const fetchApi = async() =>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9caa9026c417b6d4be4cd9afd6fd0b09`;

            const response = await fetch(url);
            const reJson = await response.json();
            setCity(reJson.main)
            
        }
        fetchApi()
    }, [search])
    return(
        <>
        <div className="box">
            <h1> Search weather condations from all over the world</h1>
            <div className="inputData">
                <input type= "search"  className="inputField" placeholder="Search" onChange={(event) => { setSearch (event.target.value)}} />

            </div>
            {!city ?(
                <p>No data found</p>
            ) 
            :(
                
          <div> 
             <div className="info" >
                <h2 className="location" >
                <i className="fa-solid fa-location-pin"></i> {search}
                </h2>
                <h1 className="temp">
                    {city.temp} &#176; cel
                </h1>
                <p className="tempmin-max">
                    min:{city.temp_min} &#176; cel | max:{city.temp_max} &#176; cel
                </p>

            </div>
          </div>
                
            )}

           
        </div>
        </>
    )
}
export default Tempapp;