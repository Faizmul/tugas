import React from 'react'
import Buttons from '../atoms/Buttons'
import MediaCard from '../atoms/MediaCard'

const Medias = () => {
  const contents = [
    {
      image: "https://img.freepik.com/free-photo/green-iguana-closeup-from-side-view-animal-closeup_488145-3480.jpg?w=826&t=st=1676225806~exp=1676226406~hmac=953903db8bece01cad7097ccf40a39bf1605f6372e34385c219bb240fa976f50",
      title: "green iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      buttonStyle: ""
    },
    {
      image: "https://img.freepik.com/premium-photo/beautiful-asian-girl-studying-library_741371-112.jpg?w=826",
      title: "Green Iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image: "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=996&t=st=1676225507~exp=1676226107~hmac=9f04c7240203835de8279e2d7adf52448d770ba1063c95572272967226992d61",
      title: "Green Iguana",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
      image: "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=996&t=st=1676225507~exp=1676226107~hmac=9f04c7240203835de8279e2d7adf52448d770ba1063c95572272967226992d61",
      title: "Green Iguana",
      desc: "except Antarctica"
    },
  ];
  return (
    <div className='px-[5%] bg-white mt-5 mb-10'>
      <div className='flex justify-center mt-1 mb-3'>
        <h1>Layanan Kami</h1>
        <br />
        {/* <p className='flex col'>Kenali diri dan bangun kepercayaan diri mu bersama kami</p> */}
      </div>
      <div className='flex flex-wrap gap-5 mb-5 justify-center'>
      {contents.map((value, index) => {
        return <MediaCard key={index} image={value.image} title={value.title} desc={value.desc} numWidth={245} cardStyle={'py-2 px-5 bg-black'} imgStyle={"p-3  rounded-lg"}/>
      })}
      </div>
      <div className='flex justify-center mt-1'>
        <Buttons action={(e) => { alert('Triggered') }} title="Lihat Selengkapnya" buttonStyle="bg-green-100 rounded-full" iconStyle="ml-[6rem] hover:rotate-90" />
      </div>
    </div>
  )
}

export default Medias