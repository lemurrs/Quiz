import React from "react";
import c from './QuizPage.module.scss'
import {useGetAllQuestionsQuery} from "../../store/api/questions";


const QuizPage=()=>{

    const {data, error} = useGetAllQuestionsQuery('2')
    console.log(data)

    return (<>
            <h1>qUiz page</h1>
        <div className={c.grid}>
            <div className={c.card}>
                Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada
            </div>
            <div className={c.card}>
                Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada
            </div>
            <div className={c.card}>
                Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada
            </div>
            <div className={c.card}>
                Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada
            </div>
            <div className={c.card}>
                Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada
            </div>
            <div className={c.card}>
                Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada  Loremsdada
            </div>
        </div>
    </>

    )
}

export default React.memo(QuizPage)