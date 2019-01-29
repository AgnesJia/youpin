import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import tabbar from 'images/tabbar.png'

import {MainContainer} from 'pages/main'
import {CategoryContainer} from 'pages/category'

import { connect } from 'react-redux'
import { UPDATE_CART_NUM } from './actionTypes'
import { withRouter } from 'react-router-dom'

const mapState = (state) => {
  return {
    num: state.getIn(["home",'num'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    update (num) {
      dispatch({
        type: UPDATE_CART_NUM,
        num
      })
    }
  }
}

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      fullScreen: true,
    }
  }
  
  componentDidMount(){
    if(localStorage["xiaomicart"]){
       let obj = JSON.parse(localStorage["xiaomicart"])
      let sum = 0
      for(let k in obj){
        sum += obj[k].num
      }
      this.props.update(sum)
    }else{
      this.props.update(0)
    }
   
    
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '24px',
              height: '24px',
              background: `url(${tabbar}) 0 0 / 24px auto no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '24px',
              height: '24px',
              background: `url(${tabbar}) 0 -24px / 24px auto no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              })
              this.props.history.push('/home')
            }}
            data-seed="logId"
          >
            <MainContainer></MainContainer>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -48px /  24px auto no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -72px /  24px auto no-repeat` }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              })
              this.props.history.push('/home/category')
            }}
            data-seed="logId1"
          >
            <CategoryContainer></CategoryContainer>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -96px /  24px auto no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -120px /  24px auto no-repeat` }}
              />
            }
            title="品味"
            key="pinwei"
            selected={this.state.selectedTab === 'pinwei'}
            onPress={() => {
              this.setState({
                selectedTab: 'pinwei',
              });
              this.props.history.push('/home/pinwei')
            }}
          >
            <div>品味</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -144px /  24px auto no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -168px /  24px auto no-repeat` }}
              />
            }
            title="购物车"
            key="cart"
            selected={this.state.selectedTab === 'cart'}
            // 1111111111111111111111111111111111111111111111111111111111111111 
            badge={this.props.num}
            onPress={() => {
              this.setState({
                selectedTab: 'cart',
              });
              this.props.history.push('/cart')
            }}
          >
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -192px /  24px auto no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabbar}) 0 -216px /  24px auto no-repeat` }}
              />
            }
            title="个人"
            key="personal"
            selected={this.state.selectedTab === 'personal'}
            onPress={() => {
              this.setState({
                selectedTab: 'personal',
              });
              this.props.history.push('/home/personal')
            }}
          >
            <div>个人</div>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }

}

export default withRouter(connect(mapState, mapDispatch)(HomeContainer))
