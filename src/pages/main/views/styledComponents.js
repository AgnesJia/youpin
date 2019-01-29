import styled from 'styled-components'

const HomeContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  #main-scroll {
    flex: 1;
    overflow-y: scroll;
  }
`

const Header = styled.header `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: .38rem;
  background: #fff;
  text-align: center;
  line-height: .44rem;
  color: #000;
  font-size: .18rem;
`
const Img = styled.img`
  height: .28rem;
  margin:.06rem;
`

 const SwiperContainer = styled.div `
   font-size: 0;
   padding-bottom: 42.6666667%;
   position: relative;
   .slider {
     position: absolute !important;
     width: 100%;
     height: 100% !important;
   }
   .slider img {
     width: 100%;
     height: 100%;
   }
   .slider-frame {
     height: 100% !important;
   }
   .slider-list {
     height: 100% !important;
   }
   .slider-slide {
     height: 100% !important;
   }
 `

const Kingkong = styled.ul`
   background-image:url("https://img.youpin.mi-img.com/jianyu/9ed85d11dd3f8d77c339451ecc210d29.jpg@base@tag=imgScale&w=1080&h=246");
   background-size:cover;
   height:.85rem;
   width:100%;
   display:flex;
   flex-direction:row;
   justify-content: center;
   align-items:center;
`
const Li = styled.li`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  .pic{
      width:.45rem;
      height:.45rem;
  }
  .pic[lazy=loading] {
    width:.2rem;height:.2rem;
  }
  .pic[lazy=error] {
    width:.2rem;height:.2rem;
  }
  span{
    font-size:.12rem;
    color: rgb(85, 86, 102);
  }
   
`


const FloorWrap = styled.div`
margin-top:.1rem;
height:auto;
background:#fff;
width:100%;
text-align:center;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom:.1rem;
.tuijian{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div{
    min-width:1.76rem;min-height:1.25rem;margin:0.015rem; display:flex;flex-direction: column;justify-content: center;align-items: center;
    span{font-size:.11rem;color: rgb(153, 153, 153);}
  }
  .pic{
    width:1.09rem;height:.73rem;
  }
  .pic[lazy=loading] {
    width:.4rem;height:.4rem;
  }
  .pic[lazy=error] {
    width:.4rem;height:.4rem;
  }
}
.zhongchou{
  padding:0 .1rem;
  width:100%;
  .zhong{
    background-color: rgb(249, 243, 233);margin-top:.05rem;
   
    .top{
      display:flex; padding:0 .13rem;
      flex-direction:row;
      justify-content: space-between;
      .left{
        display:flex;justify-content: flex-start;flex-direction:column;align-items: flex-start;
        p{font-size: .16rem; margin-top: .15rem;color: rgb(51, 51, 51);text-overflow: ellipsis;width:1.9rem;text-align:left;}
        .summary{font-size:.12rem;display:block;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;width:1.9rem;color: rgb(153, 153, 153);margin-bottom:.15rem;}
        .price{ font-size: .15rem;line-height: .15rem; color: rgb(182, 9, 9);}
}}
    .mid{width:100%;display:flex;justify-content: space-between; padding:0 .13rem;font-size:.1rem;
      .saled{color:rgb(182, 9, 9);}
      .target{color: rgb(153, 153, 153);;margin-left: .06rem;}
      .progress{color:rgb(182, 9, 9);}
      .tag{font-size: .09rem;margin-left: .06rem;border-radius: .015rem;color:#fff;padding:.02rem;}
    }
    .bottom{
      margin-top:.05rem;width:80%;height:.04rem;background-image: linear-gradient(to right, rgb(249, 196, 6), rgb(243, 117, 17));
    }
      }
      .right{
        img{height:1.19rem;}
      }
    }
.goods{padding:.1rem;
  display:flex;flex-wrap: wrap;justify-content: space-between;align-items: flex-start;
  .good{
    width:1.13rem;height:1.99rem;
    .goodImg{background:rgb(248, 248, 248);height:1.21rem;
      img{width:.86rem;margin-top:.135rem;}
      .tags{width:100%;height:.15rem;text-align:left;display:flex;flex-direction:row;
        span{font-size:.09rem;color:#fff;padding:0.01rem;border-radius:0.02rem;margin-left:0.05rem;}
      }
    }
    .goodName{
      text-align:left;
      p{font-size:.14rem;}
      .price{color:rgb(182, 9, 9);font-size:.15rem;}
    }
  }
    }


`

const Title = styled.div`
width:100%;
height: .43rem;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
h2{
  font-size:.16rem;
  margin-left:.14rem;
  line-height:.43rem;
  color: rgb(51, 51, 51);
}
`

export {
  HomeContainer,
  Header,
  Img,
  SwiperContainer,
  Kingkong,
  Li,
  Title,
  FloorWrap
}