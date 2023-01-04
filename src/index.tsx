import React from "react";
import ReactDOM from "react-dom";

import "./main.css";
import {useGetAllQuestionsQuery} from "./store/api/questions";
import {Provider} from "react-redux";
import {store} from "./store/store";
import QuizPage from "./Pages/QuizPage/QuizPage";
import Navigation from "./components/Navigation/Navigation";




function App() {


  return (<>
      <Navigation/>
      <Provider store={store}>
          <div className="container">
        <QuizPage/>
          </div>
      </Provider>
      </>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
