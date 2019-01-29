import React, { Component}  from 'react';
import Search from 'components/common/search/Search'
import Logoimg from 'images/navi_title_v4.png'
import Xin from 'images/std_titlebar_home_message.png'
import Swiper from './swiper/SwiperContainer'
import { HomeContainer,Header,Img,SwiperContainer,Kingkong,Li,FloorWrap,Title } from './styledComponents'
import { withRouter } from 'react-router-dom'

import Lazy from 'components/common/Lazy';

export default withRouter( class extends Component {
    constructor(props){
        super(props)
        this.state={
            floors:[],
            progress:[]
          }
        this.goSearch = this.goSearch.bind(this)
        this.gotoDetail = this.gotoDetail.bind(this)
    }
    render () {
      return (
          <HomeContainer>
                <Header>
                    <Img src={Logoimg}></Img>
                    <Search border={false} onClick={this.goSearch}></Search>
                    <Img src={Xin}></Img>
                </Header>
                <div id="main-scroll">
                    <SwiperContainer>
                        <Swiper {...this.props}></Swiper>
                    </SwiperContainer>
                    <Kingkong>
                    {this.props.data.kingkong.map(val => (
                        <Li key={val.iid}>
                            <Lazy className="pic" src={val.item.pic_url}/>
                            {/* <img src={val.item.pic_url} alt=""/> */}
                            <span>{val.item.title}</span>
                        </Li>                  
                    ))}
                    </Kingkong>
                    <FloorWrap>
                        <Title>
                            <h2>{this.props.data&&this.props.data.tuijian.title}</h2>
                        </Title>
                        <div className="tuijian">
                            {this.props.data.tuijian.items&&this.props.data.tuijian.items.map(val=>(
                                <div key={val.iid} style={{background: val.item.bg_color}}>
                                    <p>{val.item.title}</p>
                                    <span>{val.item.subtitle}</span>
                                    <Lazy className="pic" src={val.item.pic_url}/>
                                    {/* <img src={val.item.pic_url} alt="" /> */}
                                </div>
                            ))}
                        </div>
                    </FloorWrap>     
                    <FloorWrap>
                        <Title><h2>{this.state.floors[5] && this.state.floors[5].data.title}</h2></Title>
                        <div className="zhongchou">
                            {this.state.floors[5] && this.state.floors[5].data.items.map((val,index)=>(
                                <div className="zhong"  key={val.iid}>
                                    <div className="top">
                                        <div className="left">
                                            <p>{val.item.name}</p>
                                            <span className="summary">{val.item.summary}</span>
                                            <span className="price">￥{val.item.price_min/100}</span>
                                        </div>
                                        <div className="right">
                                            <Lazy className="pic" src={val.item.imgs&&val.item.imgs.img800}/>
                                            {/* <img src={val.item.imgs&&val.item.imgs.img800} alt=""></img> */}
                                        </div>
                                    </div>
                                    <div className="mid">
                                        <div><span className="saled">{val.item.saled_count}</span>
                                        <span className="target"> / {val.item.target_count}人支持</span>
                                        {val.item.tags&&val.item.tags[0]?
                                        <span className="tag" style={{background:val.item.tags&&val.item.tags[0].color}}>{val.item.tags&&val.item.tags[0].name}</span>
                                        :""
                                    }
                                        </div>
                                        <span className="progress">{val.item.progress}%</span>
                                    </div>
                                    <div className="bottom" style={{width:this.state.progress&&this.state.progress[index]}}></div>
                                </div>
                            ))}
                        </div>
                    </FloorWrap>
                    <FloorWrap>
                        <img src={this.state.floors[8] && this.state.floors[8].data.pic_url} alt="" width="100%"></img>
                        <div className="goods">
                            {this.state.floors[8] && this.state.floors[8].data.items.map((val)=>(
                                <div className="good" key={val.iid} >
                                    <div className="goodImg" data-id={val.item.gid} onClick={() => {this.gotoDetail(val.item.gid)}}>
                                        <Lazy className="pic" src={val.item.pic_url}/>   
                                        
                                        {val.item.tags?val.item.tags.map((val,index)=>(<div className="tags" key={index}><span style={{background:val.color}}>{val.name}</span></div>))  : ""}
                                    </div>
                                    <div className="goodName">
                                        <p>{val.item.name}</p>
                                        <span className="price">￥{val.item.market_price/100}</span>
                                    </div>
                                </div>                              
                            ))}
                        </div>
                    </FloorWrap>
                    <FloorWrap>
                        <img src={this.state.floors[7] && this.state.floors[7].data.pic_url} alt="" width="100%"></img>
                        <div className="goods">
                            {this.state.floors[7] && this.state.floors[7].data.items.map((val)=>(
                                <div className="good" key={val.iid}>
                                    <div className="goodImg" data-id={val.item.gid} onClick={() => {this.gotoDetail(val.item.gid)}}>
                                        <Lazy className="pic" src={val.item.pic_url}/>  
                                        <div className="tags">
                                            {val.item.tags?val.item.tags.map((val,index)=>(<span key={index} style={{background:val.color}}>{val.name}</span>))  : ""}
                                        </div>
                                    </div>
                                    <div className="goodName">
                                        <p>{val.item.name}</p>
                                        <span className="price">￥{val.item.market_price/100}</span>
                                    </div>
                                </div>                                
                            ))}
                        </div>
                    </FloorWrap>
{/* 渲染楼层 */}
                    {this.state.floors&&this.state.floors.filter((val,index)=>(index>=12&&index<=26)).map((val,i)=>{
                        return(
                            <FloorWrap key={val.floor_id}>
                                <Title><h2>{val.data.title}</h2></Title>
                                <img src={val.data.pic_url} alt="" width="100%"></img>
                                <div className="goods">
                                    {val.data.items&&val.data.items.map((val)=>(
                                        <div className="good" key={val.iid}>
                                            <div className="goodImg" data-id={val.item.gid} onClick={() => {this.gotoDetail(val.item.gid)}}>
                                                <Lazy className="pic" src={val.item.pic_url}/>  
                                                <div className="tags">
                                                    {val.item.tags?val.item.tags.map((val,index)=>(<span key={index} style={{background:val.color}}>{val.name}</span>))  : ""}
                                                </div>
                                            </div>
                                            <div className="goodName">
                                                <p>{val.item.name}</p>
                                                <span className="price">￥{val.item.market_price/100}</span>
                                            </div>
                                        </div>
                                        
                                    ))}
                                </div>
                            </FloorWrap>
                        ) 
                        
                    })}
                    
                </div>
          </HomeContainer>
      )
    }

    componentDidMount () {
        let formdata =new FormData();
        formdata.append("data",'{"request":{"model":"Notice","action":"HomeMask","parameters":{"page":"Homepage"}}}')
        fetch('/homepage/main/v1003?platform=m',
        {
          method:'POST'
        })
        .then(response => response.json())
        .then(result => {
          var arr=[];
          for(var i=0;i<result.data.homepage.floors[5].data.items.length;i++){
                if(result.data.homepage.floors[5].data.items[i].item.progress>=100)
                    arr.push("100%")
                else
                    arr.push(result.data.homepage.floors[5].data.items[i].item.progress+"%")
          }  
          this.setState({
            floors: [...result.data.homepage.floors],
            progress:[...arr]
          })
        //   console.log('this.state.floors :',this.state.floors.filter((val,index)=>(index>=11&&index<=26)))
          
        })        
    }

    gotoDetail(id){
        this.props.history.push('/detail/'+id)
    }

    goSearch(){
        // console.log(this.props.history)
        this.props.history.push("/search")
      }
})