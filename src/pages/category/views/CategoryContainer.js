import React, { Component } from 'react'
import CategoryUi from './CategoryUi'
import { withRouter } from 'react-router-dom'
class MainContainer extends Component {
    
  
    render () {
      return (
        <CategoryUi></CategoryUi>
      )
    }
}

export default withRouter(MainContainer)