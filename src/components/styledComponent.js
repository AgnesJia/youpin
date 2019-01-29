import styled from 'styled-components'

import border from 'components/styled/border.js'

// const SearchContainer = styled.div `
//   padding: .12rem .15rem;
// `
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
padding:0 .12rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: .45rem;
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

const SearchContent = border({
  component: styled.div `
    flex:1;
    height: .28rem;
    background: ${ props => props.bgcolor || '#eee' };
    display: flex;
    align-items: center;
    justify-content: left;
    img {
      width: .13rem;
      height: .13rem;
      margin-right: .06rem;
      margin-left: .06rem
    }
    input {
      font-size: .12rem;
      color: #979797;
      border:none;
      background:transparent
    }
  `,
  color: '#999',
  radius: 3,
  width: props => props.border ? '1px' : '0px'
})

const ChangeNumContainer = styled.div`
text-align:left;     color: rgb(102, 102, 102);

.change{margin-left:.14rem;height:.22rem;display:flex;
    div{display:inline-block;width:.3rem;height:.22rem;border:0.01rem solid #ddd;text-align:center;line-height:.2rem;}
}

`



export {
  // SearchContainer,
  SearchContent,ChangeNumContainer,HomeContainer,Header
}