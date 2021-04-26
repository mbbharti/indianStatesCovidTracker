import React, { useEffect, useState } from 'react';
import FetchData from './FetchData';

const CovidData = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const callApi= async ()=>{
            const response = await fetch('https://api.covid19india.org/data.json');
            const responsejson = await response.json();
            setData(responsejson.statewise);
            console.log(responsejson.statewise);
        }
        callApi();
    },[]);

    return (
        <>
            <div className="container">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">LastUpdatedTime</th>
                            <th scope="col">State</th>
                            <th scope="col">TotalCases</th>
                            <th scope="col">ActiveCases</th>
                            <th scope="col">RecoveredCases</th>
                            <th scope="col">Deaths</th>
                        </tr>
                    </thead>
                    {
                        data.map((value,index)=>{
                           return <FetchData 
                                key={index}
                                active={value.active}
                                confirmed={value.confirmed}
                                deaths={value.deaths}
                                lastUpdate={value.lastupdatedtime}
                                recovered={value.recovered}
                                state={value.state}
                           />
                        })
                    }
                </table>
            </div>
        </>
    );
};

export default CovidData;