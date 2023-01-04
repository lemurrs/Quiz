import React from "react";
import c from './QuizCategoryCard.module.scss'
const QuizCategoryCard = ({category}: { category: string }) => {
    return (
        <div className={c.CategoryCard}>
            <p>
                {category}
            </p>
        </div>)
}
export default React.memo(QuizCategoryCard)