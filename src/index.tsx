import React from "react";
import ReactDOM from "react-dom";
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import "./main.css";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Navigation from "./components/Navigation/Navigation";
import QuizHomePage from "./Pages/QuizHomePage/QuizHomePage";
import QuizSolvePage from "./Pages/QuizSolvePage/QuizSolvePage";

function App() {

    return (<>
            <Navigation/>
            <Provider store={store}>
                <BrowserRouter>
                    <div className="container">
                        <Routes>
                            <Route path={'/'} element={<QuizHomePage/>}/>
                            <Route path={'/:category'} element={<QuizSolvePage/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        </>

    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
