import React from 'react'
import Card from '../atoms/Card'

const Introduce = () => {
    return (
        <div className='flex justify-center items-center gap-5 border-dashed border-x-slate-300'>
            <div ><Card numWidth={300} imgStyle={'rounded-lg'} /></div>
            <div className='w-[40%]'>
                <h1>VISI</h1>
                <p>2022: Debut with NewJeans On July 22, NewJeans debuted with the lead single Attention, prior to the release of their debut EP New Jeans on August 1.</p>
                <h1>MISI</h1>
                <p>2022: Debut with NewJeans On July 22, NewJeans debuted with the lead single Attention, prior to the release of their debut EP New Jeans on August 1.</p>
            </div>
        </div>
    )
}

export default Introduce