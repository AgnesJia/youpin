import React, { Component} from 'react'
// import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'


class SwiperContainer extends Component {
  render () {
    // let data=this.props.banner
    return (
        <Carousel
          autoplay={true}
          infinite={true}
          autoplayInterval={2000}
        >
          {this.props.imgs.map(val => (
            <img
              key={val}
              src={val}
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