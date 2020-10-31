import React from 'react'
import {Layout} from "./hoc/Layout/Layout"
import {Header} from "./components/Header/Header"
import {BrowserRouter as Router} from "react-router-dom";
import {routes} from "./routes";

function App() {
  return (
    <Router>
        <Header/>
        <Layout>
            {routes}
        </Layout>
    </Router>
  );
}

export default App;
