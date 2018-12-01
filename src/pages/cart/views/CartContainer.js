import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CartUi from './CartUi'
class MainContainer extends Component {
    
  
    render () {
      return (
        <CartUi></CartUi>
      )
    }
}

export default withRouter(MainContainer)