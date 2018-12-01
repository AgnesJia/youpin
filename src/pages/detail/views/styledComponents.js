import styled from 'styled-components'
import border from 'components/styled/border'

const HomeContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  #main-scroll {
    flex: 1;
    overflow-y: scroll;
  }
`
const Header = border({
component:styled.header `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: .38rem;
  background: #fff;
  text-align: center;
  line-height: .44rem;
  color: #000;
  font-size: .16rem;
  font-weight:100;
  justify-content: space-between;
  img{
      width:.39rem;
  }
`,width:'0 0 1px 0'
})
 const SwiperContainer = styled.div `
   font-size: 0;
   padding-bottom: 100%;
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

const GoodDetailTitle = styled.div`
    width:100%;background:#fff;padding:.11rem .14rem 0;
    .title{
        h2{font-size:.16rem;color: rgb(51, 51, 51);font-weight:100}
        p{font-size: .13rem;line-height: .16rem;
            .red{color: rgb(182, 9, 9);}
            .gray{color: rgb(153, 153, 153);}
        }    
    }
    .priceDiv{
        .price{color: rgb(182, 9, 9);font-size:.24rem;
            span{font-size:.13rem;}
        }
    }
`
const SelectContainer = styled.div`
.am-wingblank.am-wingblank-lg {
    margin-left: 0;margin-right: 0;
    .am-button{
        border-radius:0;text-align: left;font-size: .12rem;height: .37rem;line-height:.37rem;display:flex;align-items: center;justify-content: space-between;padding: 0 .1rem;
        span{color:gray;}
        img{width:.12rem;height:.12rem;}
    }
    .am-button::before {border:none;}
}
.am-modal-popup{
    height:4.66rem;
}
`
const SelectPopup = styled.div`
height:4.66rem;
.title{
    display:flex;padding:.14rem;border-bottom:.01rem solid #eee;margin:0;
    img{width:.68rem;height:.68rem;border:.01rem solid #eee;border-radius:.03rem;}
    div{
        margin-left:.1rem;
        p{text-align:left;}
        .price{color:rgb(182, 9, 9);font-size:.12rem;
            span{font-size:.24rem;}
        }
    }
}
.t{color:rgb(153, 153, 153);font-size: 14px;margin-left:.14rem;line-height:.3rem;}
.type{
    text-align:left;  
    span{display:inline-block;text-align:center;line-height:.3rem;width:.7rem;height:.3rem;border:.01rem solid #eee;margin: .05rem .1rem;border-radius:.03rem;}
    .active{background:rgb(171, 138, 89);color:#fff}
}
.number{
    text-align:left; 
    .change{margin-left:.14rem;
        div{display:inline-block;width:.3rem;height:.2rem;border:0.01rem solid #eee;text-align:center;line-height:.2rem;}
    }
}
.bottom{padding:0 .15rem;
    position:fixed;bottom:0.15rem;display:flex;justify-content: space-between;flex-direction:row;width:100%;
    .button{
        display:inline-block;width:1.6rem;height:.32rem;border-radius:.16rem;line-height:.32rem;color:#fff;
    }
    .liji{background:rgb(182, 9, 9);}
    .toCart{background-color: rgb(171, 138, 89);}
}
`
//说明
const DescriptionContainer= styled(SelectContainer)`

.am-button{
    height:auto !important;
}
`
const DescriptionPopup = styled(SelectPopup)`
height:3.9rem;padding: 0 .14rem;color: rgb(51, 51, 51);
div{margin-top:.15rem;}
img{width:.12rem;height:.12rem;margin-right:.05rem;}
.tiao{text-align:left;}
.xiao{font-size:.12rem;color:rgb(102, 102, 102);line-height:.19rem;}
`
//活动


//底部
const Footer = border({
    component: styled.div`
        position:fixed;bottom:0;width:100%;height:.53rem;background:#fff;display:flex;flex-direction:row;justify-content: space-between;align-items:center;text-align:center;
        div{display:flex;flex-direction:column;
            img{width:.2rem;height:.2rem;}
        }
        .left{flex:62.5;display:flex;justify-content:center;align-items:center;position:relative;
            .num{position: absolute;top:0;right:20%;background:red;color:#fff;font-size:.09rem;width:.15rem;height:.15rem;border-radius:50%;}
            p{color: rgb(122, 122, 122);font-size: 10px;}
        }
        .btn{margin-right:.05rem;flex:111;display:inline-block;width:1rem;height:.32rem;border-radius:.16rem;line-height:.32rem;color:#fff;
    }
    .liji{background:rgb(182, 9, 9);}
    .addcart{background-color: rgb(171, 138, 89);}
    `,
    width:'1px 0 0 0'
})

// 选项卡
// const SelectCard =  sty

export {HomeContainer,DescriptionPopup,
  SwiperContainer,Header,GoodDetailTitle,SelectContainer,SelectPopup,Footer,DescriptionContainer
 
}