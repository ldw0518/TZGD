import React from 'react';
import {connect} from 'react-redux';
// import {signin} from '../actions';

// import AppBar from 'material-ui/AppBar';
// import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {pink50} from 'material-ui/styles/colors';

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
		fetch(`/favourite?id=${this.props.username}`, {method: "GET"}).then(
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
  		    cellHeight={170}
  		    style={styles.gridList}
  		  >
  		    
  		    {id.map((goods, i) => (
  		    	
  		      <Link key={"/details?id=" + id[i]}
  		      			to={"/details?id=" + id[i]}
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
  			<div style={styles.header}>
  				
  				<p style={styles.title}>我关注的商品</p>  					
  			
  				<div>
  					<Link key="order" 
  							to="/details"
  							style={styles.more}>
  					查看更多>>>
  					</Link>
  				</div>
  				
  			</div>
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
    width: 350,
    height: 350,
    overflowY: 'auto',
  },
  header: {
  	width: 350,
  	height: 30,
  	display: 'flex',
  	justifyContent: 'space-between',
    backgroundColor: pink50
  },
  title: {
  	top: 0,
  	fontSize: 16,
  	flex:1,
  	margin: 0,
	  // paddingTop: 0,
  	// marginLeft: "auto",
  	textAlign: 'center'
  },
  more: {
  	// float: "right",
  	fontSize: 12,
  	color: "black",
  	height: 15,
  
  }
 
  
};



const mapStateToProps = (state) => {
	return {
		username: state.id
	};
};

export default connect(mapStateToProps, null)(Favourite);