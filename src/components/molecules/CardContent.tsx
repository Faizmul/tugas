import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Card from '../atoms/Card';
import img1 from '../../assets/image/slide1.jpg'

const responsiveSet = [
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
]

const CardContent = () => {
    const contents = [
        {
            image: {img1},
            title: "Haerin-chan",
            desc: "2022: Debut with NewJeans On July 22, NewJeans debuted with the lead single Attention, prior to the release of their debut EP New Jeans on August 1.",
            buttonStyle: ""
        },
        {
            image: {img1},
            title: "Haerin",
            desc: "Haerin (해린) is a South Korean singer under ADOR. She is a member of the girl group NewJeans.",
            buttonStyle: ""
        },
        {
            image: {img1},
            title: "Haerin-chan",
            desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            buttonStyle: ""
        },
        {
            image: {img1},
            title: "Haerin-chan",
            desc: "2022: Debut with NewJeans On July 22, NewJeans debuted with the lead single Attention, prior to the release of their debut EP New Jeans on August 1.",
            buttonStyle: ""
        },
        {
            image: {img1},
            title: "Haerin",
            desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            buttonStyle: ""
        },
        {
            image: {img1},
            title: "Haerin-chan",
            desc: "Lizards are a widespread group of squamatexcept Antarctica",
            buttonStyle: ""
        },
    ];
    return (
        <div className='flex flex-col text-center slide-container mt-5 mb-5 px-[10%]'>
            <h1>Komentar anak harom</h1>
            <Slide duration={3000} slidesToShow={1} slidesToScroll={1} transitionDuration={500} responsive={responsiveSet}>
                {contents.map((value, index) => {
                    return <div key={index}><div className='flex justify-center items-center px-5'><Card title={value.title} desc={value.desc} numWidth={500} cardStyle={'pb-5 px-1 pt-1'} imgStyle={'border-x-4 border-y-4 border-double border-x-slate-300 border-y-slate-400 object-cover w-32 h-32 mx-auto my-5 rounded-full dark:bg-gray-500 aspect-squares'} textStyle={'text-center pb-3 px-2'} /></div></div>
                })}
            </Slide>
        </div>
    )
}

export default CardContent