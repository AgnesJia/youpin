import React, { Component,Fragment } from 'react'

import { 
  // SearchContainer,
  SearchContent
} from '../../styledComponent.js'

import search from 'images/search.png'

class Search extends Component {
  constructor(){
    super()
    this.state={
      input:'',
      searchList:[],
      history:[]
    }
  }
  
  render () {
    return (
      <Fragment>
        <SearchContent { ...this.props }>
          <img src={search} alt=""/>
          <input placeholder="搜一搜" onChange={(e)=>{this.getSearch(e)}}></input>
        </SearchContent>
        {this.state.input?
            <ul style={{position:"absolute",top:".48rem",background:"#fff",width:"100%",maxHeight:"6rem",overflow:"hidden"}}>
              {this.state.searchList&&this.state.searchList.map((v,i)=>(
                <li key={i} style={{textAlign:"left",fontSize:".13rem",borderBottom:"1px solid #ddd"}}>{v.key}</li>
              ))}
            </ul>:""
          }
      </Fragment>
        
        
    )
  }
  getSearch(e){
    this.setState({
      input:e.target.value
    })
    if(this.state.input){
      fetch('/h5ajax.php?action=suggest&key='+this.state.input,
        {
          method:'GET'
        })
        .then(response => response.json())
        .then(result => {
          this.setState({
            searchList:result.word
          })
        })
    }
    
   
  }
}

export default Search