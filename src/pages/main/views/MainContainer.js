import React, { Component } from 'react'

import MainUi from './MainUi'

class MainContainer extends Component {
    constructor () {
      super()
      this.state={
        banner:[],
        kingkong:[],
        floors:[],
        tuijian:{}
      }
    }
  
    render () {
      return (
        <MainUi data={this.state}></MainUi>
      )
    }
  
    // componentDidMount () {
    //   this.scroll = new BScroll(this.scrollId, {click: true})
    //   this.props.loadCategories(this.scroll)
    //   this.props.loadList(this.scroll)
    // }
    componentDidMount () {
      let formdata =new FormData();
      formdata.append("data",'{"request":{"model":"Notice","action":"HomeMask","parameters":{"page":"Homepage"}}}')
      fetch('/homepage/main/v1003?platform=m',
      {
        method:'POST',
        // body:formdata,
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
      })
      .then(response => response.json())
      .then(result => {
        // console.log(result.data)
        this.setState({
          banner:result.data.homepage.floors[0].data.items,
          kingkong:result.data.homepage.floors[1].data.items,
          floors:result.data.homepage.floors,
          tuijian:result.data.homepage.floors[4].data
        })
        //  console.log('this.state.floors :',this.state.banner)
      })

  }
    

  }

export default MainContainer