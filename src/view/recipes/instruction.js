import React from 'react'
import style from './style.module.scss'

const Index = ({ data, idx }) => {
    const { optional, instructions } = data;
    return <li>
            <span className={style.counter} style={optional ? {background: '#f4f4f4'} : {background: '#8dc63f', color:'#fff'} }>{idx + 1}</span>
            <span>{ instructions }</span>
    </li>
}

export default Index