import styled from 'styled-components'

import border from 'components/styled/border.js'

// const SearchContainer = styled.div `
//   padding: .12rem .15rem;
// `

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
    span {
      font-size: .12rem;
      color: #979797;
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
  SearchContent,ChangeNumContainer
}