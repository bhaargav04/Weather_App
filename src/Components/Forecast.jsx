import React from "react";


const Forecast = ({ forecast, location }) => {
    return (
        <div className="container mt-4">
            <h2 className="text-white text-center mb-4">Forecast Weather of {location.name},{location.region},{location.country}</h2>
            {forecast.forecastday.map((data, index) => {
                return (
                    <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div class="d-flex flex-row align-items-center mb-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <div class="p-2">Date : {data.date}</div>
                                        <div class="p-2"><img src={data.day.condition.icon} alt="" /></div>
                                        <div class="p-2">{data.day.condition.text}</div>
                                        <div class="p-2">Maximum Temperature : {data.day.maxtemp_c}</div>
                                        <div class="p-2">Minimum Temperature : {data.day.mintemp_c}</div>
                                        <div class="p-2">Average Temperature : {data.day.avgtemp_c}</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {data.hour.map((data) => {
                                        return (
                                            <>
                                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                                    <h6>{data.time} </h6>
                                                <h6>Maximum Celsius : {data.temp_c}</h6>
                                                <h6>Maximum Farenheit : {data.temp_f}</h6>
                                                </div>
                                                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:`${data.temp_c}%`}}>{data.temp_c}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>

    )
}



export default Forecast;