import React from 'react'
import { baseURL } from "../../modules/base"
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Index = ({ recipe }) => {

    const { title, images, uuid } = recipe

    return <>
        <div className={style.recipe}>
            <div className={ style.img_wrapper }>
                <img src={ baseURL + images.medium } />
                <Link
                    className={style.button}
                    to={{
                        pathname: `/${uuid}`,
                        uuid: uuid,
                      }}
                    >
                    <span>View</span>
                </Link>
            </div>
            <span className={ style.title }>{ title }</span>
        </div>
    </>
}

export default Index