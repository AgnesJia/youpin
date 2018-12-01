import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import tabbar from 'images/tabbar.png'

import {MainContainer} from 'pages/main'



import { withRouter } from 'react-router-dom'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      fullScreen: true,
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
            {/* <Menu></Menu> */}
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
            <div>tab3</div>
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
            <div>tab4</div>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default withRouter(HomeContainer)
