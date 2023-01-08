import c from "../QuizSolvePage.module.scss";
import React, {ChangeEvent, FormEvent} from "react";
import {Answers, IQuiz} from "../../../interfaces";
type Props={
    handleSubmit:(e:FormEvent<HTMLFormElement>, str:string)=>void,
    currentAnswer : string,
    currentQuestion :number,
    filteredData : IQuiz[],
    answers : Answers,
    select: (e:ChangeEvent<HTMLInputElement>)=>void
}
const Quiz = ({handleSubmit,currentAnswer,currentQuestion,filteredData,answers,select}:Props)=>{
    return <form onSubmit={e => handleSubmit(e, currentAnswer)}>
        <p className={c.QuizSolvePage__count}>{currentQuestion + 1}/{filteredData!.length}</p>
        <p className={c.QuizSolvePage__question}>{filteredData![currentQuestion].question}</p>
        {Object.getOwnPropertyNames(answers!).map((key: string, index) =>
                answers[key] &&  <label className={c.QuizSolvePage__form} style={{background: currentAnswer===key? 'yellow' : ''}} key={index}>

                    <input key={index} name={'QuizForm'} type={'radio'} checked={currentAnswer === key}
                           value={key} onChange={(e) => {
                        select(e)
                    }}/>
                    {answers[key]}
                </label>
        )}
        <button disabled={!currentAnswer} type={'submit'} className={`${c.QuizSolvePage__button} ${c.button}`}>Submit</button>
    </form>
}

export default React.memo(Quiz)