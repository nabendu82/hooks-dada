import React from 'react'
import './App.css';
import ClassTimer from './components/ClassTimer';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='React JS'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
