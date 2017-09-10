import React from 'react';
import {connect} from 'react-redux';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {pink50} from 'material-ui/styles/colors';

import{Link} from 'react-router-dom';

class Order extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: ['111', '222', '333'],
			name: ['111', '222', '333'],
			status: ['完成', '完成', '完成'],
			date: ['123', '123', '123'],
		}
	}
	componentWillMount() {
		fetch(`/order?id=${this.props.username}`, {method: "GET"}).then(
			res => (res.ok) ? res.json() : undefined,
			e => console.log("连接失败", e)
		).then(json => {
			if(json) {
				this.setState({
					id: json.id,
					name: json.name,
					status: json.status,
					date: json.date
				});
			}
		});
	}

	orderList() {
		const id = this.state.id;

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
		} else if(this.props.username !== "登录") {
			return(
				<Table>
					<TableHeader displaySelectAll={false}
											 adjustForCheckbox={false}
					>
						<TableRow style={styles.tHeader}>{this.header()}</TableRow>
					</TableHeader>
					<TableBody
						displayRowCheckbox={false}>
						{this.tableRow()}
					</TableBody>
				</Table>
			)
		}

		
	}

	header() {
		const data = ['商品名称', '订单状态', '下单日期'];
		return data.map(v => {
			return <TableHeaderColumn key={v}
																style={styles.tHeader}
						 >
						 	{v}
						 </TableHeaderColumn>;
		});
	}

	tableRow() {
		const id = this.state.id;
    const name = this.state.name;
		const status = this.state.status;
		const date = this.state.date;
    return id.map((v, i) => {
      return (
    		<TableRow key={v}>
          <TableRowColumn key={name[i]}
          								style={styles.tBody}>
          	<Link key={"/details?id=" + v}
  		 						to={"/details?id=" + v}
  		      			target="_blank">
  		      	{name[i]}
  		      </Link>
  		    </TableRowColumn>;
          <TableRowColumn key={status[i]}>{status[i]}</TableRowColumn>;
          <TableRowColumn key={date[i]}>{date[i]}</TableRowColumn>;
    		</TableRow>
      );
    });
	}
  render() {
  	return (
			<div style={styles.root}>
 				<div style={styles.header}>
 				
 					<p style={styles.title}>最近的订单</p>  					
 			
 					<div>
 						<Link key="order" 
 								to="/details"
 								style={styles.more}>
 						查看更多>>>
 						</Link>
 					</div>
 				</div>
 				{this.orderList()}
 			</div>
  	)
  }
}

const styles = {
  root: {
    width:350,
    height: 350,
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
  	textAlign: 'center'
  },
  more: {
  	fontSize: 12,
  	color: "black",
  	height: 15,
  },
  tHeader: {
  	height: 20
  },
};

const mapStateToProps = (state) => {
	return {
		username: state.id
	};
};

export default connect(mapStateToProps, null)(Order);

