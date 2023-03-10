import React, {ChangeEvent, useState} from "react";
import {useParams} from 'react-router-dom'
import c from './QuizSolvePage.module.scss'
import {useGetCategoryQuestionsQuery} from "../../store/api/questions";
import {Answers, IQuiz} from "../../interfaces";
import RenderResults from "./RenderResults/RenderResults";
import Quiz from "./Quiz/Quiz";

const QuizSolvePage: React.FC = () => {

    //get quiz category from url
    const {category} = useParams()
    //get quiz questions of this category from api

    const {data, error, isLoading} = useGetCategoryQuestionsQuery(category!)
    //There are some questions without correct_answer(null) so i just removed them.
    let filteredData: IQuiz[];
    if (!isLoading && !error) {
        filteredData = data!.filter((el: IQuiz) => el.correct_answer != null)
    }

    // function to handle the user's answer submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, selectedAnswer: string) => {
        e.preventDefault();
        setMyAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
        setCurrentQuestion(prev => prev + 1);
        setCurrentAnswer('')
    };

    //Question counter
    const [currentQuestion, setCurrentQuestion] = useState(0)

    //All Answers of the user
    const [myAnswers, setMyAnswers] = useState<string[]>([]);

    //Current selected input radio
    const [currentAnswer, setCurrentAnswer] = useState<string>('')

    //Controllable radio inputs
    function select(e: ChangeEvent<HTMLInputElement>) {
        setCurrentAnswer(e.target.value)
    }

    //Waiting data to load from server
    if (isLoading) return <div>Loading data ...</div>

    //Object with answers
    let answers: Answers
    if (!error && currentQuestion + 1 <= filteredData!.length) answers = filteredData![currentQuestion].answers

    return (
        <div className={c.QuizSolvePage}>
            {error ? <div>No Such Category</div> :
                currentQuestion < filteredData!.length ?
                    <Quiz answers={answers!} filteredData={filteredData!} currentAnswer={currentAnswer}
                          currentQuestion={currentQuestion} handleSubmit={handleSubmit} select={select}/>
                    :
                    <RenderResults myAnswers={myAnswers} filteredData={filteredData!}/>}

        </div>)

}
export default React.memo(QuizSolvePage)