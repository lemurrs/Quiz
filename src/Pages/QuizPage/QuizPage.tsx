import React from "react";
import c from './QuizPage.module.scss'
import {useGetAllQuestionsQuery} from "../../store/api/questions";
import QuizCategoryCard from "../../components/QuizCategoryCard/QuizCategoryCard";


const QuizPage=()=>{
    const categories=['Linux','DevOps','Networking','Programming ','Cloud','Docker','Kubernetes']
    const {data, error} = useGetAllQuestionsQuery('2')
    console.log(data)

    return (<div className={c.QuizPage}>
            <h1>Welcome to quiz ! Choose category to solve ! </h1>
        <div className={c.QuizPage__grid}>
            {categories.map(category=><QuizCategoryCard category={category}/>)}
        </div>
    </div>

    )
}

export default React.memo(QuizPage)