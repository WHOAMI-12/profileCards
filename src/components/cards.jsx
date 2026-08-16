import "../index.css"
import {Building} from 'lucide-react'

function Card(props){

    return (
        <>
      
            <div className="card">
                <div className='top'>
                    {props.aval == "Available"?
                    (
                    <h4> {props.aval}  </h4>

                    ):(
                    <h4 id="busy"> {props.aval}  </h4>

                    )}
                    <span>{props.rate}</span>
                </div>
                <div className="middle">
                    <img src={props.pfp} alt=""></img>       
                    <h3>{props.name}</h3>
                    <span>{props.role}</span>
                    <p> <Building size={11}/> {props.company}</p>
                </div>
                <div className="tags">
                    <span>{props.tags[0]}</span>
                    <span>{props.tags[1]}</span>
                    <span>{props.tags[2]}</span>
                    <span id="extraCount">{props.tags[3]}</span>
                </div>
                <div className="bottom">
                    <p>{props.description}</p>
                    <hr className="hr"/>
                    <h3>View Profile</h3>
                </div>
            </div>
       
        </>
    )
}

export default Card