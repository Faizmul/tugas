import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Buttons from '../atoms/Buttons';
import Typewriter from 'typewriter-effect';

const divStyle = {
    display: 'flex',
    backgroundSize: 'cover',
    height: '30rem'
}
const slideImages = [
    {
        url: 'https://hadenaadventure.co.id/wp-content/uploads/2022/04/rafting-di-sungai-cisadane-bogor.jpg',
        caption: 'Rafting Bersama Masyarakat Setempat',
        desc: 'Bertempat di kaki Gunung Pangrango, anak-anak akan mengeksplorasi alam yang bermanfaat untuk masyrakat dengan mengoptimalkan teknologi.'
    },
    {
        url: 'https://sentul.city/wp-content/uploads/2021/07/gede_pangrango.jpg',
        caption: 'Rafting Bersama Masyarakat Setempat',
        desc: 'Bertempat di kaki Gunung Pangrango, anak-anak akan mengeksplorasi alam yang bermanfaat untuk masyrakat dengan mengoptimalkan teknologi.'
    },
    {
        url: 'https://i0.wp.com/wisatacibodas.com/wp-content/uploads/2015/01/puncak-gunung-gede-pangrango.jpg',
        caption: 'Rafting Bersama Masyarakat Setempat',
        desc: 'Bertempat di kaki Gunung Pangrango, anak-anak akan mengeksplorasi alam yang bermanfaat untuk masyrakat dengan mengoptimalkan teknologi.'
    },
];

const Slider = () => {
    return (
        <div className="slide-container bg-white">
            <Slide duration={3000}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div className='w-full px-[5%]' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <div className='self-end ml-5 mb-20'>
                                
                                <h2 className='text-5xl w-[50%] text-white mb-2'><Typewriter
                                    options={{
                                        strings: ['Sekolah alam', 'Pangrango'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />{slideImage.caption}</h2>
                                <p className='text-lg w-[50%] text-white'>{slideImage.desc}</p>
                                <Buttons action={(e) => { alert('Triggered') }} title="Pelajari Lebih Lanjut" buttonStyle='bg-white rounded-full mt-5' iconStyle='ml-[6.5rem] hover:rotate-90' />
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slider;