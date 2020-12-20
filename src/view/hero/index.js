import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { baseURL } from "../../modules/base"
import style from './style.module.scss'

import { useSelector } from 'react-redux'

const Index = () => {

    const recipes = useSelector(state => state.recipes.list)
    const loading = useSelector(state => state.recipes.loading)
    const [recipe, setRecipe] = useState('')

    useEffect(()=> {
        if(recipes.length) {
            setRecipe(recipes[0])
        }
    },[recipes])

    return <>
        <div className={style.hero} style={ loading ? { background: "#333" } : { backgroundImage: `url(${ baseURL + recipe.images?.full})`, backgroundPosition:'center', backgroundSize: 'cover'}}>
            <div className="container">
                <div className={style.hero_container}>
                    { loading ? <div className="loader light">Loading...</div> : <> <div className={style.title}>
                        {recipe.title}
                    </div>
                    <div className={style.description}>
                        {recipe.description}
                    </div>
                    <Link
                        className={style.button}
                        to={{
                            pathname: `/${recipe.uuid}`,
                            uuid: recipe.uuid,
                        }}
                        >
                        <span>View</span>
                    </Link>
                    </> }
                </div> 
            </div>
        </div>
    </>
}

export default Index

