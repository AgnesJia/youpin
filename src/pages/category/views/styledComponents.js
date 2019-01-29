import styled from 'styled-components'
import border from 'components/styled/border'


 
const MenuWrapper = styled.div `
flex:1;
  height:100%;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > div:nth-child(3) {
    position: relative;
    flex: 1;
  }
`

const MenuHeader = styled.header `
  height: .44rem;
  background: #ee7530;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuNav = border({
  component: styled.nav `
    width: 1.44rem;
    height: .3rem;
    display: flex;
    position: relative;
  `,
  color: '#fff',
  radius: 15
})

const MenuNavItem = styled.div `
  height: 100%;
  width: 50%;
  text-align: center;
  line-height: .3rem;
  position: absolute;
  color: ${ props => props.active ? '#ee7530' : '#fff' };
  z-index: 1;
  left: ${ props => props.pos !== 'right' ? 0 : '' };
  right: ${ props => props.pos === 'right' ? 0 : '' };
`

const MenuNavSlider = styled.div `
  position: absolute;
  border-radius: .15rem;
  background: #fff;
  left: ${ props => props.dir === 'left' ? 0 : '50%'};
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 0;
  transition: all .3s ease-in;
`

const MenuList = border({
  component: styled.div `
    overflow: hidden;
    height: 100%;
    flex: 1;
    display: flex;
    width: 100%;
    /* position: absolute !important; */
    
    > div {
      height: 100%;
      overflow: hidden;
    }
  `,
  color: '#ddd',
  width: '0 1px 0 0'
})

const MenuListNav =border({
  component:styled.ul `
  width: .745rem;
  background: #fff;
  padding-top:.13rem;
`,
width:"0 1px 0 0"
})


 

const MenuListNavItem = styled.li `
  height: .48rem;
  text-align: center;
  span {
    font-size:${props=>props.active?".13rem":".12rem"};
    color:${props=>props.active?"rgb(132, 95, 63)":"rgb(51, 51, 51)"};
    font-weight:${props=>props.active?"400":"300"};
    display: inline-block;
    width: 100%;
    line-height: .24rem;
    border-left: solid .03rem ${ props => props.active ? 'rgb(132, 95, 63)' : '#fff' };;
  }
`

const MenuListContent = styled.div `
  flex: 1;
  padding: .2rem;
  padding-top: 0;
  margin-top: .2rem;
  > div {
    > div {
    display: inline-block;
    padding-bottom: .2rem;
    padding-right: .2rem;
  }
  }
`


export { MenuWrapper,
    MenuHeader,
    MenuNav,
    MenuNavItem,
    MenuNavSlider,
    MenuList,
  
    MenuListNav,
    MenuListNavItem,
    MenuListContent}