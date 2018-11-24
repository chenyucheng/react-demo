import React from 'react';

export default class Test extends React.Component{
  render(){
    return <div>
    hello,
    {React.Children.map(this.props.children,(child,index)=>{
        return <p>{child}</p>
    })}
    </div>
  }
}