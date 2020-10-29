import React from 'react'
import {Layout} from "./hoc/Layout/Layout";
import {Header} from "./components/Header/Header";
import {Planets} from "./pages/Planets/Planets";

function App() {
  return (
    <>
        <Header/>
        <Layout>
            <Planets/>
        </Layout>
    </>
  );
}

export default App;
