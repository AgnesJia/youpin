import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'
import Right from 'images/right.png'
import {DescriptionPopup} from '../../views/styledComponents'
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
      modal1: false,
      modal2: false
      
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
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
   
    return (
      <WingBlank>       
        <Button onClick={this.showModal('modal2')} className="description">
            <div>
                <span>活动：</span><span style={{color:"#fff",background:"rgb(182, 9, 9)",fontSize:".11rem",padding:".02rem",margin:" 0 .02rem"}}>{this.props.activity.title}</span><span style={{color:"rgb(182, 9, 9)",fontSize:".13rem"}}>{this.props.activity.content}</span>
            </div>
            
            <img src={Right} alt=""></img>
        </Button>
        <WhiteSpace />
        <Modal popup visible={this.state.modal2} onClose={this.onClose('modal2')} animationType="slide-up">
            <DescriptionPopup>
                <div className="title">促销活动</div>
                <div style={{textAlign:"left"}}>
                    <span style={{color:"#fff",background:"rgb(182, 9, 9)",fontSize:".11rem",padding:".02rem",margin:" 0 .02rem"}}>{this.props.activity.title}</span>
                </div>
                <div style={{textAlign:"left"}}><span style={{fontSize:".13rem"}}>{this.props.activity.content}</span></div>
            </DescriptionPopup>
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
  
  
  
}

export default Select