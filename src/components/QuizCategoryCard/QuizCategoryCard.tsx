import React from "react";
import c from './QuizCategoryCard.module.scss'
import {Link} from 'react-router-dom'
const QuizCategoryCard = ({category}: { category: string }) => {
    return (
        <Link to={category}>
            <div className={c.CategoryCard}>
                <p>
                    {category}
                </p>
            </div>
        </Link>
        )
}
export default React.memo(QuizCategoryCard)