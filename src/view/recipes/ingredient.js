import React from 'react'
import style from './style.module.scss'
import { useSelector } from 'react-redux';

const Index = ({ data }) => {
    const { uuid, name, amount, measurement } = data;
    const specials = useSelector(state => state.recipes.specials)

    const checkSpecial = () => {
        if(specials.length) {
            const res = specials.filter(item => item.ingredientId === uuid)
            if(res.length) {
                return <div className={style.specials}>
                    <span><strong>Title</strong>: {res[0].title}</span>
                    <span><strong>Text</strong>: {res[0].text}</span>
                    <span><strong>Type</strong>: {res[0].type}</span>
                </div>
            } else {
                return 
            }
        }
    }
    return <>
        <li>
            <span>{ name } - { amount } {measurement}</span>
            { checkSpecial() }
        </li>
    </>
}

export default Index