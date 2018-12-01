import  React,{ Component } from 'react'
import check from 'images/std_icon_checkbox_check.png'
import uncheck from 'images/std_icon_checkbox_uncheck.png'

export default class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        checked : false,
    }
      
    }
    _clickHandle(e){
        
        this.setState({
            checked : this.state.checked ? false : true
        });
        let obj = JSON.parse(localStorage["xiaomicart"])
        obj[this.props.keys].checked=!this.state.checked;
        localStorage["xiaomicart"]=JSON.stringify(obj);
        this.props.checkAllChoose(!this.state.checked);
    }
    componentWillReceiveProps(nextprops){
        // console.log(nextprops.isAuto);
        // if(nextprops.isAuto === false)this.state.checked = nextprops.Allchoose;
        if(nextprops.Reverse != this.props.Reverse){
            this.setState({
                checked : !this.state.checked
            })
        }
        if(nextprops.Allchoose){
            this.setState({
                checked:true
            })
        }

    }
    render () {
        console.log('this.state.checked :',this.state.checked)
        return (
            <div className="checkbox">
                <input id={this.props.keys} type="checkbox" checked = {this.props.Allchoose ? this.props.Allchoose : this.state.checked} onClick = {(e)=>{this._clickHandle(e)}} style={{background:"url("+{check}+")",width:".18rem",height:".18rem",marginRight:".07rem"}} />
                <label htmlFor={this.props.keys}>
                    <img src={this.state.checked?check:uncheck} alt="" style={{width:".18rem",height:".18rem",marginRight:".07rem"}}/>
                </label>
                {/* <img src={check} alt="" style={{width:".18rem",height:".18rem",marginRight:".07rem"}}/> */}
            </div>

        )
    }
}