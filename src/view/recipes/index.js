import React from 'react'
import style from './style.module.scss'

import { useSelector } from 'react-redux'

import Recipe from "./recipe"

const Index = () => {
    
    const recipes = useSelector(state => state.recipes.list)
    const loading = useSelector(state => state.recipes.loading)

    return <>
        <div className={style.recipe_list}>
            <div className="container">
                <div className={style.label}>List of <span>Recipes</span></div>
                { loading ? <div className="loader">Loading...</div> : <div className={style.recipe_list_container}>
                    {recipes.length ? recipes.map(recipe => <Recipe key={recipe.uuid} recipe={recipe} />) : ''}
                </div> }
            </div>
        </div>
    </>
}

export default Index