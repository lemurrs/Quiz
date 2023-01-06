import React, {useState} from "react";
import {useParams} from 'react-router-dom'
import c from './QuizSolvePage.module.scss'
import {useGetCategoryQuestionsQuery} from "../../store/api/questions";
import {Answers, IQuiz} from "../../interfaces";

const QuizSolvePage: React.FC = () => {

    //get quiz category from url
    const {category} = useParams()

    //get quiz questions of this category from api
    const {data, error, isLoading} = useGetCategoryQuestionsQuery(category!)

    //There are some questions without correct_answer(null) so i just removed them.
    let filteredData:any;
    if(!isLoading){
    filteredData=data?.filter((el:IQuiz)=>el.correct_answer!=null)
    }

    // function to handle the user's answer submission
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>, selectedAnswer:string) => {
        e.preventDefault();
            setMyAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
            setCurrentQuestion(prev => prev + 1);
            setCurrentAnswer('')
        if(currentQuestion<filteredData.length-1) renderResults()
    };


    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [myAnswers, setMyAnswers] = useState<string[]>([]);
    const [currentAnswer,setCurrentAnswer]=useState<string>('')
    if(isLoading) return <div>Loading data ...</div>

    let answers:any
    if(currentQuestion+1<=filteredData.length) answers=filteredData[currentQuestion].answers


    const renderResults = () => {
        let numCorrect = 0;
        myAnswers.forEach((answer:string, index:number) => {
            if (answer === filteredData[index].correct_answer) {
                numCorrect++;
            }
        });

        return (
            <div style={{marginTop:'6rem'}}>
                <p>You got {numCorrect} out of {filteredData.length} questions correct.</p>
            </div>
        );
    };


    return (<>
        { currentQuestion<filteredData.length ?
        <form className={c.QuizSolvePage} onSubmit={e=>handleSubmit(e,currentAnswer)}>
            <p className={c.QuizSolvePage__count}>{currentQuestion+1}/{filteredData.length}</p>
            <p className={c.QuizSolvePage__question}>{filteredData[currentQuestion].question}</p>
            {Object.keys(answers).map((key:string,index) =>
                <label className={c.QuizSolvePage__form} key={index}>
                    {answers[key] &&  <input key={index} name={'QuizForm'} type={'radio'} value={key} onChange={(e) => {setCurrentAnswer(e.target.value)}} />}
                    {answers[key]}
                </label>
            )}
          <button type={'submit'} className={c.QuizSolvePage__buttonPrev}>Submit</button>
        </form> : renderResults()}
    </>)

}
export default React.memo(QuizSolvePage)