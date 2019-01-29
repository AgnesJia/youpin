import React,{Component} from 'react'
import Search from 'components/common/search/Search'
import {HomeContainer,Header} from "components/styledComponent"
import { withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
import randomString from 'random-string'
import { MenuList,MenuListNav,MenuListNavItem,MenuListContent,MenuWrapper} from './styledComponents'
import { Map,List,fromJS } from 'immutable'
export default withRouter( class extends Component {
    constructor(){
        super()
        this.state={
            navList:[],
            currentIndex:0,
            navContent:[]
        }
        this.goSearch  =this.goSearch.bind(this)
    }
    render(){
        return(
        <HomeContainer>
            <Header>
                <Search onClick={this.goSearch}>搜一搜</Search>
            </Header>
            <MenuWrapper>
                <MenuList>
                    <div ref={el => this.navListScroll = el}>
                    <MenuListNav>
                        {
                        this.state.navList.map((v, i) => {
                            return (
                            <MenuListNavItem 
                                key={v.ucid} 
                                active={this.state.currentIndex === i}
                                onTouchStart={(e) => this.handleNavClick(v.ucid, i, e)}
                            >
                                <span>
                                { v.name }
                                </span>
                            </MenuListNavItem>
                            )
                        })
                        }
                    </MenuListNav>
                    </div>
                    <MenuListContent ref={el => this.navContentScroll = el}>
                    <div>
                        {/* {
                        this.state.navContent && this.state.navContent.map((v, i) => {
                            return <div key={randomString()} onClick={() => this.props.history.push('/list')}>{typeof(v) !== 'string' ? v.get('title') : v}</div>
                        })
                        } */}
                    </div>
                    </MenuListContent>
                </MenuList>
            </MenuWrapper>
            
            
        </HomeContainer>
        )
    }

    componentDidMount () {
        fetch('/mock/category.json')
        .then(response => response.json())
        .then(result => {
            // console.log('result :',result)
            this.setState({
                navList:result.result.request.data
            })
            // console.log('this.state.navList :',this.state.navList)
        })

        this.navlistscroll = new BScroll(this.navListScroll, {click: true})
        this.navcontentscroll = new BScroll(this.navContentScroll, {click: true})
    }
    
    handleNavClick (id, i, e) {
        // 当前高亮
        this.setState({
          currentIndex: i
        })
    
        // 边界滑动
        this.getCriticalPoint(e)
    
        // 显示菜单内容
        // let formdata =new FormData();
        // formdata.append("data",'{"request":{"model":"Homepage","action":"GetUclassList","parameters":{"id":'+id+'}}}')
        // var searchParams = new URLSearchParams()
        // searchParams.set('data','{"request":{"model":"Homepage","action":"GetUclassList","parameters":{"id":'+id+'}}}')
        // fetch('/api/app/shopv3/pipe',
        // {
        //     method:'POST',
        //     headers:new Headers({
        //         "Referer":"https://app.youpin.mi.com/goodscategory/",
        //         'Content-Type':"application/x-www-form-urlencoded"
        //     }),
        //     // body:'data={"request":{"model":"Homepage","action":"GetUclassList","parameters":{"id":'+id+'}}}'
        //     body:searchParams
        // })
        // .then(response => response.json())
        // .then(result => {
        //     console.log(result)
        //   this.setState({
        //     navContent:result.result.request.data
        // })
        // this.setState({
        //   navContent: this.filterNavList(v)
        // }, () => {
        //   this.navcontentscroll.refresh()
        // })
    //   })
    }

      getCriticalPoint (e) {
        let clientY = e.touches[0].clientY
        let isReachTopPoint = clientY - 108 < 90
        // window.innerHeighgt - 44 - 64 - 50 : flex视口高度
        // clientY - (44 + 64) - flex视口高度 : 边界值
        let isReachBottomPoint = clientY - 108 - (window.innerHeight - 158) > -90
        if (isReachTopPoint) {
          this.navlistscroll.scrollBy(0, window.innerHeight/2, 100)
          this.navlistscroll.refresh()
        }
        if (isReachBottomPoint) {
          this.navlistscroll.scrollBy(0, -window.innerHeight/2, 100)
          this.navlistscroll.refresh()
        }
      }
    
      filterNavList (key) {
        return this.state.navList.find((v, k) => {
          return k === key
        })
      }

      goSearch(){
        this.props.history.push("/search")
      }
})