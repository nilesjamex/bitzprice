import React, {useState} from 'react'

const Prices = () => {
    const [sign, setSign] = useState({currency: 'USD'});
    return (
        <div>
         <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.USD.description} : <span className="badge badge-primary">
                    {this.props.USD.code}
                </span> <strong>
                    {this.props.USD.rate}
                </strong>
            </li> 
             </ul>   
        </div>
    )
}
export default Prices