import React from 'react';
import './App.scss';
import MenuTab from './pages/menuTab';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMailBulk) //あらかじめ使用するアイコンを追加しておく

function App() {
  return(
    <React.Fragment>
      <MenuTab />
    </React.Fragment>
  );
};

export default App;