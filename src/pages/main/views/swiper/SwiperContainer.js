import React, { Component} from 'react'
// import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'
// const swiperListGetter = (data) => {
//   return data ? data.slice(0, 5) : []
// }

// const mapState = (state) => {
//   return {
//     swiperList: swiperListGetter(state.getIn(['cookbook', 'list']))
//   }
// }

class SwiperContainer extends Component {
  render () {
    // let data=this.props.banner
    return (
        <Carousel
          autoplay={true}
          infinite
        >
          {this.props.data.banner&&this.props.data.banner.map(val => (
            <img
              key={val.iid}
              src={val.item.pic_url}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
            />
          ))}
        </Carousel>
        
    )
  }
}

// export default connect(mapState)(SwiperContainer)
export default SwiperContainer