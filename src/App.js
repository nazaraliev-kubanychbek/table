import React, {useEffect} from 'react'
import {Provider, useDispatch} from "react-redux";
import store from "./redux";
import "./style.css"
import Table from "./components/Table/Table";


function App() {


    return (
        <Provider store={store}>
            <div className="App">
                <Table/>
            </div>
        </Provider>

    );
}

export default App;
