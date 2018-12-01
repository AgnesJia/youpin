import React, { Component } from 'react'
import GoBack from 'images/std_tittlebar_main_device_back_normal.png'
import GoHome from 'images/std_titlebar_homeNormal_transparent.png'
// import redheart from 'images/redheart.png'
import grayheart from 'images/grayheart.png'
import cart from 'images/shop_cart_v2.png'
import { withRouter } from 'react-router-dom'
import Swiper from './swiper/SwiperContainer'
import Select  from './popup/Select'
import Description from "./popup/Description";
import Activity from "./popup/Activity"
import { HomeContainer,SwiperContainer,Header,GoodDetailTitle,SelectContainer,Footer,DescriptionContainer } from './styledComponents'

export default withRouter( class extends Component {
    constructor (props) {
      super(props)
      this.state={
          data:{},
          imgs:[],
          goodDetail:{},
          goodType:[],
          goodTags:[],
          service:[],
          brand:{},
          activity:{},
          cartNum:0
      }
      this.goBack = this.goBack.bind(this)
      this.getChild = this.getChild.bind(this)
      this.gotoCart = this.gotoCart.bind(this)
    }
  
    render () {
      return (
        <HomeContainer>
            <Header>
                <img src={GoBack} alt="" onClick={this.goBack}></img>
                商品详情
                <img src={GoHome} alt=""></img>
            </Header>
            <div id="main-scroll">
                <SwiperContainer>
                    <Swiper imgs={this.state.imgs}></Swiper>
                </SwiperContainer>
                <GoodDetailTitle>
                    <div className="title">
                        <h2>{this.state.goodDetail.attr_ext && this.state.goodDetail.attr_ext.custom_name}</h2>
                        <p>
                            {this.state.goodDetail.attr_ext&&this.state.goodDetail.attr_ext.red_words ? <span className="red">{this.state.goodDetail.attr_ext.red_words}</span>:""}
                            <span className="gray">{this.state.goodDetail&&this.state.goodDetail.summary}</span>
                        </p>
                    </div>
                    <div className="priceDiv">
                        <div className="price"><span>￥</span>{this.state.goodDetail&&this.state.goodDetail.price_min/100}</div>
                    </div>
                </GoodDetailTitle>
                {/* 选择商品属性 */}
                {this.state.activity?<DescriptionContainer>
                    <Activity activity={this.state.activity}></Activity>
                </DescriptionContainer>:""}
                
                <SelectContainer>
                    <Select type={this.state.goodType} tags={this.state.goodTags} ref={el => this.getChildMethod=el}></Select>
                </SelectContainer>
                <DescriptionContainer>
                    <Description brand={this.state.brand} service={this.state.service}></Description>
                </DescriptionContainer>
                
            </div>
            <Footer>
                <div className="left">
                    <img src={grayheart} alt=""/>
                    <p>收藏</p>
                </div>
                <div className="left" onClick={this.gotoCart}>
                    <img src={cart} alt=""/>
                    <p>购物车</p>
                    {this.state.cartNum!==0?<span className="num">{this.state.cartNum}</span>:""}
                    
                </div>
                <div className="liji btn" onClick={this.getChild}>立即购买</div>
                <div className="addcart btn" onClick={this.getChild}>加入购物车</div>
            </Footer>
        </HomeContainer>
      )
    }

    componentDidMount () {
        let formdata =new FormData();
        formdata.append("data",'{"detail":{"model":"Shopv2","action":"getDetail","parameters":{"gid":"'+this.props.match.params.gid+'"}},"comment":{"model":"Comment","action":"getList","parameters":{"goods_id":"'+this.props.match.params.gid+'","orderby":"1","pageindex":"0","pagesize":3}},"activity":{"model":"Activity","action":"getAct","parameters":{"gid":"'+this.props.match.params.gid+'"}}}')
        fetch('/app/shop/pipe',
        {
            method:'POST',
            headers:{
                "Referer":"https://home.mi.com/detail?gid="+this.props.match.params.gid,
                // 'Content-Type':'application/x-www-form-urlencoded'
            },
            body:formdata
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
          this.setState({
            data: result,
            imgs:result.result.detail.data.good.album,
            goodDetail:result.result.detail.data.good,
            goodType:result.result.detail.data.props,
            goodTags:result.result.detail.data.group[0]?result.result.detail.data.group[0].tags:[],
            brand:result.result.detail.data.brand,
            service:result.result.detail.data.service,
            activity:result.result.detail.data.good.copywriting?result.result.detail.data.good.copywriting[0]:{}
          })
          console.log(result)
        })        
    }
    goBack(){
        this.props.history.goBack()
    }
    // 触发子组件方法
    getChild(){
        this.getChildMethod.showModal('modal2')
    }
    gotoCart(){
        this.props.history.push("/cart")
    }

})

