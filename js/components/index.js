import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Pictures from './Pictures';
import Favourite from './Favourite';
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
        <div style={styles.container}>
          <Favourite style={styles.favourite}/>
        </div>
        
      </div>
    );
  }
}


const styles = {
  container: {
    marginTop: 45,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    borderColor: "black"
  },
  favourite: {
    // margin: 50,
    // float: 'left'
  }
};

export default Index;
