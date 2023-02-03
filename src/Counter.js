import React from "react"


export class Counter extends React.Component{
state={
    count: this.props.initial 
   }

componentDidMount(){

  this.counter = setInterval(()=>{
        this.setState((state)=>{
          return {
            count: state.count + (this.props.increment),
          }
        })
      },this.props.time)
    }
      render(){
        return(
          <div>
           <h1>Count: {this.state.count}</h1>
          </div>
        )
}
 
}
