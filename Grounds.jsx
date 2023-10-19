import React from 'react'
// import Gcard from './groundDetails/Gcard'
import axios from 'axios';
import { useState,useEffect } from 'react';
// import { NavLink} from 'react-router-dom'
// import SearchItem from './searchItem/SearchItem';


const Grounds = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/grounds');
  

    // The data is now in the `response.data` variable
    console.log(response.data);
    setData(response.data);
  };


  return (
    <>
    <div className="row">
    {data.map((val) => (
      <div className="col-lg-3 col-md-4 col-sm-6" style={{marginTop : "2.5%"}}>
            <div className="card h-100">
                    <img src={val.image} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                <div className="card-body">
                    <h5 className="card-title" style={{display : "inline"}}>{val.name}</h5>
                    <p className="card-text ">{val.Ratings}</p>
                    <p className="card-text">{val.location} , {val.city}</p>
                    <p className="card-text">{val.price} Rs.</p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        </div> 
    ))}

    </div>    
    </>
  )
}

export default Grounds