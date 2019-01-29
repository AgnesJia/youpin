import { Modal, Button, WhiteSpace, WingBlank,Toast } from 'antd-mobile';
import React from 'react'
import Right from 'images/right.png'
import {SelectPopup} from '../../views/styledComponents'

import { connect } from 'react-redux'
import { UPDATE_CART_NUM } from 'pages/home/actionTypes'

const mapState = (state) => {
  return {
    num: state.getIn(["home",'num'])
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     update (num) {
//       dispatch({
//         type: UPDATE_CART_NUM,
//         num
//       })
//     }
//   }
// }

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      index:0,
      num:1,
      selected:"请选择颜色 型号 分类"
    };
    this.select = this.select.bind(this)
    this.add = this.add.bind(this)
    this.reduce = this.reduce.bind(this)
    this.showModal = this.showModal.bind(this)
  }


  showModal (key) {
    // e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    // console.log('this.props.type.img :',this.props.type[this.state.index]&&this.props.type[this.state.index].img)
    console.log('object :',this.state.selected)
    return (
      <WingBlank>       
        <Button onClick={()=>{this.showModal('modal2')}} className="select"><div><span>已选：</span>{this.state.selected}</div><img src={Right} alt=""></img></Button>
        <WhiteSpace />
        <Modal popup visible={this.state.modal2} onClose={this.onClose('modal2')} animationType="slide-up">
            <SelectPopup>
                <div className="title">
                    <img src={this.props.type[this.state.index]&&this.props.type[this.state.index].img} alt=""></img>
                    <div>
                        <p>{this.props.type[this.state.index]&&this.props.type[this.state.index].name}</p>
                        <p className="price">￥<span>{this.props.type[this.state.index]&&this.props.type[this.state.index].price/100}</span></p>
                    </div>
                </div>
                <div className="type">
                    {this.props.tags[0]?<div className="t">产品</div>:''}
                    {this.props.tags&&this.props.tags.map((val,i)=>(
                        <span key={i} onClick={()=>{this.select(i)}} className={i===this.state.index?"active":""}>{val.name}</span>
                    ))}
                </div>
                <div className="number">
                    <div className="t">数量</div>
                    <div className="change">
                        <div className="reduce button" onClick={()=>{this.reduce(this.state.num)}}>-</div>
                        <div>{this.state.num}</div>
                        <div className="add button" onClick={()=>{this.add(this.state.num)}}>+</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="button liji">立即购买</div>
                    <div className="button toCart" onClick={()=>{this.addToCart(this.props.type[this.state.index].name,this.props.type[this.state.index].img,this.props.type[this.state.index].price,this.state.num)}}>加入购物车</div>
                </div>
            </SelectPopup>
        </Modal>
      </WingBlank>
    );
  }
  componentDidMount () {
    // let i = this.state.index;
    // this.setState({
    //     selectImg:this.props.type[0]&&this.props.type[0].img
    // })
    // console.log('this.props.type :',this.state.selectImg)
  }
  select(i){
      this.setState({
        index:i,
        selected:this.props.type[i].name+"x"+this.state.num
      })
      
  }
  reduce(n){
      if(n>1){
        this.setState({
          num:n-1,
          selected:this.props.type[this.state.index].name+"x"+(n-1)
        })
      }
      else{
          this.showToast()
      }
      
  }
  add(n){
    this.setState({  
        num:n+1,
        selected:this.props.type[this.state.index].name+"x"+(n+1)
    })
  }
  addToCart(name,img,price,number){
    let bStop=true;
      if(localStorage["xiaomicart"]){
        let obj = JSON.parse(localStorage["xiaomicart"])
        for(let key in obj){
          if(key===name){
            obj[name].num+=number;
            localStorage["xiaomicart"]=JSON.stringify(obj)
            this.showToast2()
            this.props.addNum(number)
            return
          }    
        }
        bStop=false;
      }else{
        let obj = {}
        obj[name]={img:img,price:price,num:number,checked:false}
        localStorage["xiaomicart"]=JSON.stringify(obj)
        this.showToast2()
        this.props.addNum(number)
      }
       
      if(bStop===false){
        let obj = JSON.parse(localStorage["xiaomicart"])
        obj[name]={img:img,price:price,num:number,checked:false}
        localStorage["xiaomicart"]=JSON.stringify(obj)
        this.showToast2()
        this.props.addNum(number)
      }

      // if(localStorage["xiaomicart"]){
      //   let obj = JSON.parse(localStorage["xiaomicart"])
      //   let sum = 0
      //   for(let k in obj){
      //     sum += obj[k].num
      //   }
      //   this.props.update(sum)
      // }
      
  }
  showToast() {
    Toast.info('商品数量已达到最小值了哦~', 1.5);
  }

  showToast2(){
    Toast.info('加入购物车成功~', 1.5);
    
  }
}

export default (Select)
// connect(mapState)