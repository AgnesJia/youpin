import React, { Component } from 'react'

import { 
  ChangeNumContainer
} from '../../styledComponent.js'



class ChangeNum extends Component {
  constructor(props){
    super(props)
    this.state={
      num:this.props.num,
      keys:this.props.keys
    }
  }
  render () {
    console.log('this.state.keys :',this.state.keys)
    return (
    <ChangeNumContainer>
        <div className="change">
            <div className="reduce button" onClick={()=>{this.reduce(this.state.num)}}>-</div>
            <div>{this.state.num}</div>
            <div className="add button" onClick={()=>{this.add(this.state.num)}}>+</div>
        </div>
    </ChangeNumContainer>
      
    )
  }

  reduce(n){
    if(n>1){
      this.setState({
        num:n-1
      })
      let obj=JSON.parse(localStorage["xiaomicart"])
      obj[this.props.keys].num=n-1
      localStorage["xiaomicart"]=JSON.stringify(obj)
    }
    else{
        console.log('0 :',0)
    }
    let num = 0;
    if(localStorage["xiaomicart"]){
        Object.keys(JSON.parse(localStorage["xiaomicart"])).map(k=>{
            if(JSON.parse(localStorage["xiaomicart"])[k].checked===true){
                num +=Number(JSON.parse(localStorage["xiaomicart"])[k].num)*Number(JSON.parse(localStorage["xiaomicart"])[k].price/100)
            }
        })
    }
    this.props.changeTotle(num)
  }
  add(n){
    this.setState({  
        num:n+1
    })
    let obj=JSON.parse(localStorage["xiaomicart"])
    obj[this.props.keys].num=n+1
    localStorage["xiaomicart"]=JSON.stringify(obj)
    let num = 0;
    if(localStorage["xiaomicart"]){
        Object.keys(JSON.parse(localStorage["xiaomicart"])).map(k=>{
            if(JSON.parse(localStorage["xiaomicart"])[k].checked===true){
                num +=Number(JSON.parse(localStorage["xiaomicart"])[k].num)*Number(JSON.parse(localStorage["xiaomicart"])[k].price/100)
            }
        })
    }
    this.props.changeTotle(num)
  }
}

export default ChangeNum