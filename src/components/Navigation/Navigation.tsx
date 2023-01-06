import React from "react";
import c from './Navigation.module.scss'

const Navigation = () => {
    return (
        <header className={c.Header}>
            <nav className={c.Header__nav}>
                <ul className={c.Header__ul}>
                    <li><a href="/">Home Page</a></li>
                </ul>
            </nav>
        </header>)
}
export default React.memo(Navigation)