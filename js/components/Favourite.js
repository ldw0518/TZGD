import React from 'react';
import {connect} from 'react-redux';
import {signin} from '../actions';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import {Link} from 'react-router-dom';

class Favourite extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			favouriteId: [],
			favouriteName: [],
			favouriteImages: [],
		}
	}
	componentWillMount() {
		fetch("/favourite.json", {method: "GET"}).then(
			res => (res.ok) ? res.json() : undefined,
			e => console.log("连接失败", e)
		).then(json => {
			if(json) {
				this.setState({
					favouriteId: json.favouriteId,
					favouriteName: json.favouriteName,
					favouriteImages: json.favouriteImages
				});
			}
		});
	}
	gridList() {
		const id = this.state.favouriteId;
		const name = this.state.favouriteName;
		const images = this.state.favouriteImages;
		if(this.props.username === "登录") {
			return(
  		  <GridList
  		    cellHeight={180}
  		    style={styles.gridList}
  		  >
  		  	<Link to="/sign">
  		    	<GridTile
  		    	    key="noLogin"  	
  		    	    title="请点击图片登录"  	       
  		    	  	titleStyle={styles.title}
  		    	>
  		    	  <img src="/img/noLogin.jpg" />
  		      </GridTile>
  		    </Link>
  		  </GridList>
			);
		} else if(this.props.username !== "登录" && typeof(id) == "undefined" ) {
			return(
				<GridList  			    
  			  style={styles.gridList}
  			>
  			  <GridTile
  			    key="noGoods"  		       
  			    titleStyle={styles.title}
  			    >
  			    <img src="/img/noGoods.jpg" />
  			  </GridTile>
  			</GridList>
  		)
		} else {
			return(
				<GridList
  		    cellHeight={150}
  		    style={styles.gridList}
  		  >
  		    
  		    {id.map((goods, i) => (
  		    	
  		      <Link to={"/details?id=" + id[i]}
  		      			target="_blank">
  		      	<GridTile
  		      	  key={goods}
  		      	  title={name[i]}  		      	  
  		      		titleStyle={styles.title}
  		      	>
  		      	  <img src={images[i]} />
  		      	</GridTile>
  		      </Link>
  		    ))}
  		  </GridList>
			)
		}
	}
	
	render() {
		return (
			<div style={styles.root}>
  			<Subheader style={styles.header} inset={true}>我关注的商品</Subheader>
				{this.gridList()}
			</div>
		)
	}
}
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width:320
  },
  gridList: {
    width: 300,
    height: 300,
    overflowY: 'auto',
  },

 //  title: {
 //  	color: 'red',
	// }
  
};

const tilesData = [
  {
    img: 'img/1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'img/2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'img/3.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'img/4.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'img/5.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'img/6.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'img/7.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'img/8.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const mapStateToProps = (state) => {
	return {
		username: state.username
	};
};

export default connect(mapStateToProps, null)(Favourite);