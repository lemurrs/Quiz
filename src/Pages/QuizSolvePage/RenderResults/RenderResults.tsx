
import React from "react";
import {IQuiz} from "../../../interfaces";
import {useNavigate} from 'react-router-dom'
import c from './RenderResults.module.scss'

type Props = {
    myAnswers:string[],
    filteredData:IQuiz[]
}

const RenderResults:React.FC<Props> = ({myAnswers,filteredData}) => {

    //navigate will return user to homepage after button click
    const navigate=useNavigate()

    let numCorrect = 0;
    myAnswers.forEach((answer: string, index: number) => {
        if (answer === filteredData[index].correct_answer) {
            numCorrect++;
        }
    });

    return (
        <div className={c.results}>
            <p>You got {numCorrect} out of {filteredData.length} questions correct.</p>
            <button className={`${c.results__button} ${c.button}`} onClick={()=>{navigate('/')}}>Nice!</button>
        </div>
    );
};
export default React.memo(RenderResults)