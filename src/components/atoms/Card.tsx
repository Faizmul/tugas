import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Buttons from './Buttons'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import img1 from '../../assets/image/slide1.jpg'
import img2 from '../../assets/image/2.png'

type Props = {
    image?: string | StaticImageData,
    alt?: string,
    numWidth: number,
    title?: string,
    desc?: string,
    style?: string,
    imgStyle?: string,
    textStyle?: string,
    cardStyle?: string,
}

const Card = (props: Props) => {
    return (
        <div className={` flex flex-col flex-wrap justify-center bg-slate-200 rounded-xl shadow-slate-800 shadow-md w-full hover:scale-105 duration-300 mb-5 mt-5 ${props.cardStyle}`}>
            <div className=' bg-white rounded-t-full rounded-bl-full rounded-br-[100%] flex flex-col items-center'>
                <Image className={`${props.imgStyle}`} width={`${props.numWidth}`} height={245} src={img2} alt={`${props.alt}`} />
                <div className={`${props.textStyle}`}>
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div >
                <div className={'mb-2'}>
                    <Buttons action={(e) => { alert('Triggered') }} title="Login" buttonStyle="bg-slate-200" iconStyle="ml-[-2rem] hover:rotate-90" />
                </div>
            </div>
        </div>
    )
}

export default Card