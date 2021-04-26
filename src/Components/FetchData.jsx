import React from 'react';

const FetchData = (props) => {
    return (
        <>
            <tbody>
                <tr>
                    <td style={{width:'20rem'}}>{props.lastUpdate}</td>
                    <td>{props.state}</td>
                    <td>{props.confirmed}</td>
                    <td>{props.active}</td>
                    <td>{props.recovered}</td>
                    <td>{props.deaths}</td>
                </tr>
            </tbody>

        </>
    );
}

export default FetchData;