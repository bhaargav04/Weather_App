import React from "react";

const Current = ({ current, location }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-white text-center mb-3">Current Weather of {location.name},{location.region},{location.country}</h2>
            <div className="row">
                {/* column-1 */}
                <div className="col-3">
                    <div class="card bg-info rounded border border-secondary text-center" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:'74px'}} >
                            
                            <img src={current.condition.icon} class="card-img-top" alt="..." style={{width:50,height:50,marginRight:'0px',marginLeft:'0px'}}/>

                           <h6 class="card-title" style={{marginRight:'25px',marginLeft:'10px',fontSize:'25px'}}>{current.condition.text}</h6>
                          
                    </div>
                </div>

                {/* column-2 */}
                <div className="col-3">
                <div class="card bg-info rounded border border-secondary text-center" >
                            <div class="card-body ">
                            {/* <img src={current.condition.icon} class="card-img-top" alt="..." style={{width:50,height:50,marginLeft:'50px',marginRight:''}}/> */}
                                <h3 class="card-title ">Temp in C {current.temp_c}</h3>
                            </div>
                    </div>
                </div>

                {/* column-3 */}
                <div className="col-3">
                <div class="card bg-info rounded border border-secondary text-center" >
                            <div class="card-body">
                            {/* <img src={current.condition.icon} class="card-img-top" alt="..." style={{width:50,height:50,marginLeft:'50px',marginRight:''}}/> */}
                                <h3 class="card-title">Temp in F {current.temp_f}</h3>
                            </div>
                    </div>
                </div>

                {/* column-4 */}
                <div className="col-3">
                <div class="card bg-info rounded border border-secondary text-center" >
                            <div class="card-body">
                            {/* <img src={current.condition.icon} class="card-img-top" alt="..." style={{width:50,height:50,marginLeft:'50px',marginRight:''}}/> */}
                                <h3 class="card-title">Humidity {current.temp_f}</h3>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Current;