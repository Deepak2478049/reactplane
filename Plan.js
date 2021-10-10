import React from 'react'

export default function Plan(props) {

    return (
        <div>

          

           <li className="shadow p-2 my-2 col-sm-6">{props.value}</li>
           <button className="btn btn-danger my-2,col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>DELETE</button>
        </div>
    )
}




