import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { baseURL } from '../../modules/base'
import style from './style.module.scss'

import Ingredient from "./ingredient"
import Instruction from "./instruction"
import { setRecipe } from '../../modules/actions/recipe/recipe.actions'

const Index = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes.list)
    const recipe = useSelector( state => state.recipes.recipe)

    useEffect(() => {
        if(location.uuid) {
            const filteredRecipe = recipes.filter(item => item.uuid === location.uuid)
            if(filteredRecipe.length) {
                dispatch(setRecipe(filteredRecipe[0]))
            }
        }
    }, [location, recipes, recipe, dispatch])

    return <>
        <div className={style.details}>
            <div className={style.banner} style={{ backgroundImage: `url(${ baseURL + recipe.images?.full})` }}></div>
            <div className={style.container}>
                <div className={style.title}>{recipe.title}<span></span></div>
                <img className={style.img} src={baseURL + recipe.images?.full} alt={recipe.title}/>
                <div className={style.info}>
                    <ul>
                        <li>
                            Prep Time:
                            <span>{recipe.prepTime} minutes</span>
                        </li>
                        <li>
                            Cook Time:
                            <span>{recipe.cookTime} minutes</span>
                        </li>
                        <li>
                            Serving:
                            <span>{recipe.servings}</span>
                        </li>
                    </ul>
                </div>
                <div className={style.description}>
                    {recipe.description}
                </div>
                <div className={style.more}>
                    <div className={style.box1}>
                        <div className={style.box_label}>Ingredients</div>
                        <ul>
                            {recipe.ingredients && recipe.ingredients.map(item => {
                                return <Ingredient key={item.uuid} data={item}/>
                            })}
                        </ul>
                    </div>
                    <div className={style.box2}>
                    <div className={style.box_label}>Instructions</div>
                        <ul>
                            {recipe.ingredients && recipe.directions.map((item, index) => {
                                return <Instruction key={index} idx={index} data={item} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Index