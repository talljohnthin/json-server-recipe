import React, { useEffect } from 'react'
import style from './style.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes, fetchSpecials } from '../../modules/actions/recipe/recipe.actions'

import Hero from '../hero'
import RecipeList from '../recipes'

const Index = () => {
    const dispatch = useDispatch()
    const recipes = useSelector( state => state.recipes.list )
    const specials = useSelector( state => state.recipes.specials )

    useEffect(()=> {
        if(!recipes.length) {
            dispatch(fetchRecipes())
        }
        if(!specials.length) {
            dispatch(fetchSpecials())
        }
    },[dispatch, recipes, specials])
    
    return <>
        <div className={style.home}>
            <Hero />
            <RecipeList />
        </div>
    </>
}

export default Index