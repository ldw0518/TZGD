import React from 'react';
import {connect} from 'react-redux';

import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {cyan500} from 'material-ui/styles/colors';

import {Link} from 'react-router-dom';

class Classification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
			header: [{ img: "./images/header_1.jpg"}, { img: "./images/header_2.jpg"}, { img: "./images/header_3.jpg"}, { img: "./images/header_4.jpg"}, { img: "./images/header_5.jpg"}],
			book: [{ img: "./images/2_1.jpg", name: "高数辅导书", price: "60.00" }, { img: "./images/10_1.jpg", name: "平凡的世界", price: "80.00" }, { img: "./images/19_1.jpg", name: "Java编程思想", price: "60.00" }, { img: "./images/20_1.jpg", name: "C++Primer", price: "40.00" }, { img: "./images/21_1.jpg", name: "东野圭吾文集", price: "130.00" }],
  		sport: [{ img: "./images/3_1.jpg", name: "耐克运动鞋", price: "400.00" }, { img: "./images/4_1.jpg", name: "羽毛球拍", price: "60.00" }, { img: "./images/11_1.jpg", name: "斯伯丁篮球", price: "300.00" }, { img: "./images/12_1.jpg", name: "哑铃", price: "100.00" }, { img: "./images/13_1.jpg", name: "滑板", price: "120.00" }],
			clothes: [{ img: "./images/7_1.jpg", name: "男士外套", price: "180.00" }, { img: "./images/14_1.jpg", name: "男款长裤", price: "40.00" }, { img: "./images/15_1.jpg", name: "鸭舌帽", price: "40.00" }, { img: "./images/16_1.jpg", name: "连衣裙", price: "60.00" }, { img: "./images/27_1.jpg", name: "男夹克风衣", price: "70.00" }],
			digital: [{ img: "./images/1_1.jpg", name: "机械键盘", price: "230.00" }, { img: "./images/9_1.jpg", name: "数码相机", price: "600.00" }, { img: "./images/22_1.jpg", name: "游戏手柄", price: "30.00" }, { img: "./images/23_1.jpg", name: "ViVo6", price: "1100.00" }, { img: "./images/24_1.jpg", name: "小米音响", price: "110.00" }], 
			daily: [{ img: "./images/5_1.jpg", name: "收纳盒", price: "10.00" }, { img: "./images/17_1.jpg", name: "手提包", price: "250.00" }, { img: "./images/18_1.jpg", name: "化妆品", price: "92.00" }, { img: "./images/25_1.jpg", name: "捷安特自行车", price: "750.00" }, { img: "./images/26_1.jpg", name: "吹风机", price: "60.00" }],              //虚拟产品
		}
	}

	componentWillMount() {
		fetch(
			`/recommend?id=${this.props.username}`,
			{method: "GET"}
		).then(
			res => (res.ok)? res.json() : underfined,
			e => console.log('连接失败', e)
		).then(json => {
			if(json) {
				this.setState({
					header: json.header,
					sport: json.header_1,
					clothes: json.header_2,
					digital: json.header_3,
					daily: json.header_4,
					book: json.header_5
				});
			}
		})

	}

	quick() {
		const data = ["运动", "服装", "日常用品", "书籍", "鞋靴", "手机"];
		return data.map(v => {
			return <li style={styles.li}><Link to={"/"}>{v}</Link></li>
		})
	}

	genre(v) {
		const data = v;
		return data.map(a => {
			return (
				<div style={styles.tile}>
				<GridTile
          key={a.img}
          title={a.name}
          titleStyle={styles.title}
          subtitle={<span>￥:{a.price}</span>}
        	subtitleStyle={styles.subtitle}
        >
        	<div><img src={a.img} style={styles.picture}/></div>
        </GridTile>
        </div>
      )
		});
	}

	recommend() {
		const data = [this.state.book, this.state.sport, 
									this.state.clothes,this.state.digital, 
									this.state.daily];
		const head = this.state.header;
		return data.map((v ,i)=> {
			return (
				<div style={styles.body}>
					<div style={styles.header}>
						<div>
							<img src={head[i].img} alt={i} style={styles.photo}/>
						</div>
					</div>
					<div style={styles.root}>
						<div>
						<GridList
      				cellHeight={180}
      				style={styles.gridList}
    				>
							{this.genre(v)}
						</GridList>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div style={styles.main}>
				<div style={styles.list}>
					<ul>
						<li style={styles.li}>热门分类：</li>
						{this.quick()}
					</ul>
				</div>
				{this.recommend()}
			</div>)
	}
}

const styles = {
	main: {
		display: 'flex',
		flexDirection: 'column'
	},
	body: {
		display: 'flex',
		alignItems: 'center',
		height: 220,
		backgroundColor: '#B3E5FC',
		marginTop: 10
	},
	list: {
		left: '500',
		backgroundColor: '#B3E5FC'
	},
	li: {
		listStyle: 'none',
		float: 'left',
		marginLeft: 10,
	},
	header: {
		width: 280,
		height: 220,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
  	borderRight:'3px inset #000'
	},
	photo: {
		width: 260,
		height: 190,
		overflow: 'hidden',
		marginTop: 10,
		borderRadius: 10
	},
	tile: {
		overflow: 'hidden'
	},
	title: {
  	top: 0,
  	fontSize: 16,
  	flex:1,
  	margin: 0,
  	textAlign: 'center',
  },
  subtitle: {
  	top: 0,
  	fontSize: 12,
  	flex:1,
  	margin: 0,
  	textAlign: 'center',
  },
	root: {
    height: 200
  },
  gridList: {
    width: 900,
    height: 200,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 50
  },
  picture: {
  	width: 190,
  	height: 190,
  	overflow: 'hidden',
  	borderRadius: 10
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.id
  };
};

export default connect(mapStateToProps, null)(Classification);