import React from 'react'
type Props = {
    title?: string,
}

const titleSection = ({title}: Props) => {
  return (
    <div>{title}
    <div className='flex ml-2 justify-start items-baseline'>
            <p className="ml-2 uppercase font-[800] mr-2">kenalan dengan sekolah alam </p><h2 className={`content-[pangrango] text-animation`}>pangrango</h2>
        </div>
    </div>
  )
}

export default titleSection



