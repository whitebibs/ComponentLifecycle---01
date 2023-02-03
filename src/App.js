import React from "react"
import {Counter} from "./Counter"

export class App extends React.Component{
    render(){
        return(
            <div>
                <Counter initial={0} increment={1} time={1000}/>
            </div>
        )
    }
}
