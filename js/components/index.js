import React from 'react';
import {connect} from 'react-redux';



import Header from './Header';
import Pictures from './Pictures';
import Favourite from './Favourite';
import Order from './Order';
import Lunbo from './Lunbo';
import Classification from './Classification';
import Slider from './Slider/Slider';
import SubHeader from './SubHeader';
// import AppList from './AppList';
// import AppTabs from './AppTabs';
// import SongCard from './SongCard';
// import DownloadList from './DownloadList';
// import Upload from './Upload';
// import SongSheet from './SongSheet';
// import Player from './player';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  // page() {
  //   switch(this.props.page) {
  //   case '0': return <AppTabs />;
  //   case '1': return <SongCard key="songcard1" type="random"/>;
  //   case '2': return <SongCard key="songcard2"/>;
  //   case '3': return <Upload />;
  //   case '4': return <DownloadList />;
  //   case '5': return <SongSheet type="mine"/>;
  //   default: return <SongSheet />;
  //   }
  // }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={styles.body}>
          <div style={styles.sub}>
            <SubHeader />
          </div>
          <div style={styles.container}>
            <Favourite style={styles.favourite}/>
            <div style={styles.picture}>
              <Slider
                items={IMAGE_DATA}
                speed={1.2}
                delay={2.1}
                pause={true}
                autoplay={true}
                dots={true}
                arrows={true}
                
              />,
            </div>
            
            <Order />
          </div>
          <div style={styles.fenlei}>
            <Classification />
          </div>
        </div>
        
      </div>
    );
  }
}

const IMAGE_DATA = [
  {
    src: './images/demo1.jpg',
    alt: 'images-1',
  },
  {
    src: './images/demo2.jpg',
    alt: 'images-2',
  },
  {
    src: './images/demo3.jpg',
    alt: 'images-3',
  },
];

const styles = {
  body: {
    marginTop: 45,
    display: 'flex',
    flexDirection: 'column',
    // width: 1800,
    alignItems: 'center',
    justifyContent: "center",
    width: 1300,
    // backgroundColor: 'gray',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sub: {
    backgroundColor: '#B3E5FC',
  },
  container: {
    // marginTop: 45,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
  },
  favourite: {
    // margin: 50,
    // float: 'left'
  },
  picture: {
    width: 600,
    height: 330,
    marginLeft: 10,
    marginRight: 10
  },
  fenlei: {
    marginTop: 10,
    width: 1290
  }
};

export default Index;
