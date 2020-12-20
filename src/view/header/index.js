import React from 'react'
import style from './style.module.scss'

const Index = () => {
    return <>
        <div className={style.header}>
            <div className="container">
                <div className={style.header_container}>
                    <div className={style.logo}>
                        Recipe
                    </div>
                    <div className={style.navigation}>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Index