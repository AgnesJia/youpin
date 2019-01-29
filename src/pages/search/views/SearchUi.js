import React,{Component} from 'react'
import Search from 'components/common/search/Search'
import GoBack from 'images/std_tittlebar_main_device_back_normal.png'
import {HomeContainer,Header} from "components/styledComponent"
import { withRouter } from 'react-router-dom'
import {Title} from './styledComponent'

export default withRouter( class extends Component {
    constructor(props){
        super(props)
        this.state={
            resou:[]
        }
        this.goBack = this.goBack.bind(this)
    }
    render(){
        return(
        <HomeContainer style={{background:"#fff"}}>
            <Header>
                <img src={GoBack} alt="" onClick={this.goBack}></img>
                <Search></Search>
                <div style={{fontSize:".13rem",padding:".05rem 0 .05rem .15rem"}}>搜索</div>
            </Header>
            <Title>热门搜索</Title>
            <div style={{padding:".2rem"}}>
                {this.state.resou&&this.state.resou.map(v=>(
                    <span key={v.iid} style={{background:v.color,fontSize:".13rem",padding:".05rem .1rem",margin:".1rem .05rem",borderRadius:"0.03rem",lineHeight:".4rem",color:"rgb(102, 102, 102)"}}>{v.text}</span>
                ))}
            </div>
            
        </HomeContainer>
        )
    }

    componentDidMount () {
        fetch('/mock/resou.json')
        .then(response => response.json())
        .then(result => {
            console.log('result :',result)
            this.setState({
                resou:result.result.hotWords.data.hot_item
            })
            console.log('this.state.resou :',this.state.resou)
        })

       
    }

    goBack(){
        this.props.history.goBack()
    }
    
})