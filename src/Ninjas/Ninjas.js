import React, {Component} from "react";

const Ninjas= ({ninjas,qbDeleteFun}) =>{
    const ninjaList=ninjas.map( ninja =>{
        return(
            <div className="ninja" key={ninja.id}>
                <h1>
                    {ninja.name}
                </h1>
                <button onClick={()=>{qbDeleteFun(ninja.id)}}>Delete</button>
            </div>
        )
    });

    return(
        <div>
            {ninjaList}
        </div>
    );
}
export default Ninjas;