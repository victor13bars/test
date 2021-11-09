import React from 'react';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './css/style.css'

const App = () => {
    return (
        <div className="container">
                <NavBar/>
                <AppRouter/>

        </div>
    );
};

export default App;
