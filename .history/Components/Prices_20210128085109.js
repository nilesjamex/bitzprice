import React, {useState} from 'react'

const Prices = (props) => {
    const [sign, setSign] = useState({currency: 'USD'});
    return (
        <div>
         <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {props.bpi.USD.description} : <span className="badge badge-primary">
                    {props.bpi.USD.code}
                </span> <strong>
                    {props.bpi.USD.rate}
                </strong>
            </li> 
             </ul>   
        </div>
    )
}
export default Prices