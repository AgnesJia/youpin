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
 
const ZhenXuan = border({
  component:styled.div`
    height:.44rem;background:#fff;display:flex;justify-content:space-between;align-items:center;font-size:.14rem;color:rgb(51,51,51);font-weight:bold; padding:0 .1rem 0 .12rem;
    input{display:none;}
    .xuan{flex:1;margin-left:.07rem;}
    span{color:rgb(153, 153, 153);font-size:.13rem;font-weight:500}
  `,width:"1px"
})
const Quanxuan = styled(ZhenXuan)`
height:.54rem;border:none;padding-right:0;
div{color: rgb(51, 51, 51);font-size:.13rem;font-weight:100;
  .red{color:rgb(191, 17, 17);}
}
.totle{display:flex;align-items:center;}
.goto{width:1rem;background:rgb(191, 17, 17);color:#fff;height:.54rem;line-height:.54rem;text-align:center;margin-left:.1rem;}

`

const Item = styled.div`
height:.93rem;padding:.15rem .1rem .04rem .12rem;background:#fff;
display:flex;justify-content:space-between
.checkbox{display:flex;align-items:center}
input{display:none;}
.right{
  flex:1;display:flex;flex-direction:column;justify-content:space-between;
  .bottom{display:flex;justify-content:space-between;align-items:center;
    .price{color:rgb(191, 17, 17);font-size:.1rem;
      span{font-size:.14rem;}
    }
  }
}
`
const Footer =border({
component:styled.div`
  height:.54rem;width:100%;background:#fff;position:fixed;bottom:0；

`,width:"1px 0 0 0"
}) 


export {
  HomeContainer,Header,ZhenXuan,Item,Footer,Quanxuan
}