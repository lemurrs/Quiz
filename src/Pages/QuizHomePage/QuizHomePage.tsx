import React from "react";
import c from './QuizHomePage.module.scss'
import QuizCategoryCard from "../../components/QuizCategoryCard/QuizCategoryCard";


const QuizHomePage: React.FC = () => {

    //All categories
    const categories = ['Linux', 'DevOps', 'Bash', 'Docker', 'Code', 'CMS']

    return (
        <div className={c.QuizPage}>
            <h1>Welcome to quiz ! Choose category to solve ! </h1>
            <div className={c.QuizPage__grid}>
                {categories.map((category, index) => <QuizCategoryCard category={category} key={index}/>)}
            </div>
        </div>
    )
}
export default React.memo(QuizHomePage)