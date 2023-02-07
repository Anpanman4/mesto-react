import React from 'react';
import '../index.css'
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js"
import api from "../utils/api.js"

function App() {
  const [ userName, setUserName ] = React.useState("");
  const [ userDescription, setUserDescription ] = React.useState("");
  const [ userAvatar, setUserAvatar ] = React.useState("");

  // const [cards, setCards ] = React.useState([]);

  React.useEffect(() => {
    api.getUserValues().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
  }, [userName, userDescription, userAvatar])

  return (
    <>
      <Header altText="Логотип Место" />
      <Main
        userName={userName}
        userAbout={userDescription}
        userAvatar={userAvatar}
      />
      <Footer />
    </>
  );
}

export default App;
