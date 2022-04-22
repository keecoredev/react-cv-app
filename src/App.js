import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";


class App extends React.Component {

  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;