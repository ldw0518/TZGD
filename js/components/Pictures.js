import React from 'react';
import {connect} from 'react-redux';
// import {signin} from '../../actions';

class Pictures extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iNow: 0,
			bCheck: true
		};
	}
	setInow(index) {
		if(index !== undefined) {
			this.setState({
				iNow: index
			});
		} else {
			var _this = this;
			this.timer = setInterval(() => {
				if(_this.state.bCheck) {
					_this.setState((prev) => {
						if(prev.iNow == 6) {
							return {
								iNow: 0
							} ;
						} else {
							return {
								iNow: prev.iNow+1
							};
						}
					});
				} else {
					return false;
				}
			}, 2000);
		}
	}

	checkSwitch() {
		this.setState((prev) => {
			return {
				bCheck: !prev.bCheck
			};
		});
	}
	render() {
		return (
			<div id="Pictures"
				onMouseOver={this.checkSwitch}
				onMouseOut={this.checkSwitch}>
				<Btns iNow={this.state.iNow}
							setInow={this.setInow} />
				<Imgs iNow={this.state.iNow}
							setInow={this.setInow} />
			</div>
		)
	}
}
class Btns extends React.Component {
	componentDidMount() {
		this.props.setInow();
	}
  getIndex(e) {//获取a的父级索引值
      var list=e.target.parentNode.parentNode.childNodes;
      for(var i=0;i<list.length;i++){
          if(list[i]===e.target.parentNode){
              return i;
          }
      }
  }
  changeInow(e) {//回调方法
      //console.log($(e.target).parent().index());
      //console.log(this.getIndex(e));
      var index=this.getIndex(e);
      this.props.setInow(index)
  }
  
  render(){
    var arr=[];
    for(var i=0;i<6;i++){
      var btnsContent=null;
      var index=i;
      if(i==this.props.iNow){
          btnsContent=
              <li key={i.toString()}>
                  <a onMouseOver={this.changeInow} style={{background:'rgba(255,255,255,0.5)'}} href="javascript:;"></a>
              </li>
      } else{
          btnsContent=
              <li key={i.toString()}>
                  <a  onMouseOver={this.changeInow} href="javascript:;"></a>
              </li>
      }
      arr.push(btnsContent);
	
    	return (
    	    <ul id="btns">{arr}</ul>
    	);
  	}
  }
}
class Imgs extends React.Component {
	componentDidMount() {//刚开始加载时，就执行动画函数
            var iNow=this.props.iNow;
            var obj=document.getElementById('imgs').getElementsByTagName('li')[iNow].childNodes[0];
            startMove(obj,{'opacity':100});
        }
        componentWillReceiveProps(nextProps) {
            var obj=document.getElementById('imgs').getElementsByTagName('li')[nextProps.iNow].childNodes[0];
            //console.log(obj)
            startMove(obj,{'opacity':100});
        }
        // this.startMove:startMove(),
        render() {
            var arr=[];
            for(var i=0;i<6;i++){
                var imgsContent=null
                if(i==this.props.iNow){
                    imgsContent=
                        <li key={i.toString()}>
                            <img style={{opacity:'0'}} src={'img/'+(i+1)+'.jpg'} />
                        </li>
                    arr.push(imgsContent);
                }else{
                    imgsContent=
                        <li key={i.toString()}>
                            <img style={{display:'none'}} src={'img/'+(i+1)+'.jpg'} />
                        </li>
                    arr.push(imgsContent);
                }

            }

            return (
                <ul id="imgs">{arr}</ul>
            )
        }
    
}

export default Pictures;