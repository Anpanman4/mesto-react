import React from 'react';
import './index.css'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js"
import api from "./utils/api.js"

function App() {
  const [ userInfo, setUserInfo ] = React.useState({})

  React.useEffect(() => {
    api.getUserValues().then((data) => {
      setUserInfo({
        userName: data.name,
        userAbout: data.about,
        userAvatar: data.avatar
      })
    })
  }, [userInfo])

  return (
    <>
      <Header altText="Логотип Место" />
      <Main
        userName={userInfo.userName}
        userAbout={userInfo.userAbout}
        userAvatar={userInfo.userAvatar}
      />
      <Footer />
    </>
  );
}

export default App;
