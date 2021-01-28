import React, {useState} from 'react'

const Prices = (props) => {
    const [sign, setSign] = useState({currency: 'GBP'});

    let list = " ";

    if(sign.currency === 'USD') {
        list =  <li className="list-group-item">
        Bitcoin rate for {props.bpi.USD.description} : <span className="badge badge-primary">
            {props.bpi.USD.code}
        </span> <strong>
            {props.bpi.USD.rate}
        </strong>
    </li> 
    } else if(sign.currency === 'GBP') {
        list =  <li className="list-group-item">
        Bitcoin rate for {props.bpi.GBP.description} : <span className="badge badge-primary">
            {props.bpi.GBP.code}
        </span> <strong>
            {props.bpi.GBP.rate}
        </strong>
    </li> 
    } else if(sign.currency === 'EUR') {
        list =  <li className="list-group-item">
        Bitcoin rate for {props.bpi.EUR.description} : <span className="badge badge-primary">
            {props.bpi.EUR.code}
        </span> <strong>
            {props.bpi.EUR.rate}
        </strong>
    </li> 
    }
    return (
        <div>
         <ul className="list-group">
           {list}
             </ul>   
        </div>
    )
}
export default Prices