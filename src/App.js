import React from 'react'
import {Layout} from "./hoc/Layout/Layout"
import {Header} from "./components/Header/Header"
import {Planets} from "./pages/Planets/Planets"
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <Layout>
            <Planets/>
        </Layout>
    </Router>
  );
}

export default App;
