import React from 'react'
import { NavLink} from 'react-router-dom'
const Gcard = (props) => {
  return (
      <>
      <div class="card mb-3" style={{maxWidth: "540px"}}>
      <div class="row g-0">
    <div class="col-md-5" >
      <img
        src={props.image}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"
        style={{height: "100%"}}
      />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <div className='row'>
        <div className='col-6'>
        <h5 class="card-title">{props.name}</h5>
        </div>
        <div className='col-6'>
        <p className="card-text" style={{textAlign: 'right',marginRight:"5%"}}>{props.Ratings} ⭐</p>
        </div>
        </div>

         <p className="card-text">{props.location}</p>

         <div className='row'>
        <div className='col-6'>
        <p className="card-text">{props.price} Rs.</p>
        </div>
        <div className='col-6'>
        <NavLink to="/moreinfo"><button className="btn btn-primary" style={{alignContent : "right" ,marginRight:"5%"}}> See Availibility</button></NavLink>
        </div>
        </div>

      </div>
    </div>
  </div>
</div>
      {/* <div className="row ">
        <div className="col-lg-6" style={{marginTop : "2.5%"}}>
            <div className="card h-100">
            <div className="card-body">
                    <img src={props.image} className="card-img-top" alt="Hollywood Sign on The Hill" style={{width:"80%" ,display:"inline"}}/>
                    <h5 className="card-title" style={{display : "inline"}}>{props.name}</h5>
                    <p className="card-text ">{props.Ratings}</p>
                    <p className="card-text">{props.location} , {props.city}</p>
                    <p className="card-text">{props.price} Rs.</p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xl-4" style={{marginTop : "2.5%"}}>
            <div className="card h-100">
                    <img src={props.image} className="card-img-top" alt="Hollywood Sign on The Hill"/>
                <div className="card-body">
                    <h5 className="card-title" style={{display : "inline"}}>{props.name}</h5>
                    <p className="card-text ">{props.Ratings}</p>
                    <p className="card-text">{props.location} , {props.city}</p>
                    <p className="card-text">{props.price} Rs.</p>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        </div> 
    </div>*/ }
    </>
  )
}

export default Gcard
