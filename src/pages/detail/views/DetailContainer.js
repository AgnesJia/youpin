import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DetailUi from './DetailUi'
class MainContainer extends Component {
    
  
    render () {
      return (
        <DetailUi></DetailUi>
      )
    }
}

export default withRouter(MainContainer)