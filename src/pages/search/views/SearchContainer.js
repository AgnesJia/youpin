import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SearchUi from './SearchUi'
class SearchContainer extends Component {
    
  
    render () {
      return (
        <SearchUi></SearchUi>
      )
    }
}

export default withRouter(SearchContainer)