import React from "react";
import {useParams} from 'react-router-dom'
import c from './QuizSolvePage.module.scss'
import {useGetAllQuestionsQuery} from "../../store/api/questions";

const QuizSolvePage = ()=>{

    const {category}=useParams()
    const {data, error, isLoading} = useGetAllQuestionsQuery(category)
    console.log(data)

    return (<div className={c.QuizSolvePage}>{category}</div>)
}
export default React.memo(QuizSolvePage)