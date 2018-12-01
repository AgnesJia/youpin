import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'
import Right from 'images/right.png'
import dui from 'images/detail_icon_service.png'
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
                <span>说明：</span>
            </div>
            <div>
                <div><img src={dui} alt=""/><span>本产品为有品第三方商品</span></div>
                <div>
                    {this.props.service?<img src={dui} alt=""/>:""}
                    {this.props.service&&this.props.service.map(val=>(
                        <span key={val.text}>{val.text}</span>
                    ))}
                </div>
                <div><img src={dui} alt=""/><span>支持七天无理由退货（请参考商品详情-常见问题）</span></div>
            </div>
            <img src={Right} alt=""></img>
        </Button>
        <WhiteSpace />
        <Modal popup visible={this.state.modal2} onClose={this.onClose('modal2')} animationType="slide-up">
            <DescriptionPopup>
                <div className="title">说明</div>
                <div className="tiao"><img src={dui} alt=""/>
                    <span>本产品为有品第三方商品</span>
                    <p className="xiao">小米有品所售商品，均经过精心挑选，严格把关，为您甄选品质上乘的精品商品。非小米/非米家品牌商品，第三方品牌为实际销售方，并提供生产/发货/售后服务。</p>
                </div>
                <div className="tiao">
                    {this.props.service?<img src={dui} alt=""/>:""}
                    {this.props.service&&this.props.service.map(val=>(
                        <span key={val.text}>{val.text}</span>
                    ))}
                </div>
                <div className="tiao"><img src={dui} alt=""/><span>支持七天无理由退货（请参考商品详情-常见问题）</span></div>
                <div className="tiao"><img src={dui} alt=""/>
                    <span>邮费说明</span>
                    <p className="xiao">1、由小米平台发货的小米/米家自营商品，单笔满150元免运费，不满收取10元运费；</p>
                    <p className="xiao">2、有品平台上的三方商品，即有品配送和第三方商家发货的商品，2018年1月1日起，单笔订单满99元免运费，不满99元收10元运费；</p>
                    <p className="xiao">3、特殊产品需要单独收取运费，具体以实际结算金额为准；</p>
                    <p className="xiao">4、优惠券等不能抵扣运费金额；</p>

                </div>
                <div className="tiao">
                    <img src={dui} alt=""/>
                    <span>企业信息</span>
                    <p className="xiao">企业名称：{this.props.brand.merchant_name}</p>
                    <p className="xiao">企业地址：{this.props.brand.merchant_address}</p>
                    <p className="xiao">企业电话：{this.props.brand.merchant_contact}</p>
                    <p className="xiao">营业期限：{this.props.brand.merchant_name}</p>
                    <p className="xiao">经营范围：{this.props.brand.merchant_name}</p>
                </div>
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