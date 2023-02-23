import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/swiper.min.css";
import MediaCard from '../atoms/MediaCard'
import Image from "next/image";
import bg1 from '@/assets/image/logo.svg'

const Swipers = () => {
  const contents = [
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
  ];
  return (
    <div className="flex flex-col justify-between w-full h-full items-center mr-[10%] mt-5">
      <h1 className="">Komentar anak haram</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="flex items-center w-full h-full text-lg gap-6"
      >
          {/* <SwiperSlide>
            <div className="bg-black rounded-b-3xl rounded-t-lg pb-4">
            <div className="flex flex-col items-center justify-center object-center bg-slate-700 rounded-lg">
                <Image className="items-center justify-center object-center rounded-3xl" width={145} src={bg1} alt={"GG"}/>
                <p>pagination HIHI Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi dolores repellat ducimus maiores eveniet, enim modi accusantium eaque, aliquam ad earum! Sit autem odio explicabo, facilis natus odit modi.</p>
            </div>
            </div>
        </SwiperSlide> */}
          <div className="flex justify-center">
            {contents.map((value, index) => {
              return <SwiperSlide><MediaCard key={index} image={value.image} title={value.title} desc={value.desc} numWidth={345} cardStyle={'px-[5.3rem] mt-2 object-center'} imgStyle={'rounded-full'} textStyle={'text-center'}/></SwiperSlide>
            })}
          </div>
      </Swiper>
    </div>
  );
}

export default Swipers;