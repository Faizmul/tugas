import React, { useState } from "react";
import Image from "next/image";
import SpaIcon from '@mui/icons-material/Spa';
import bg1 from '@/assets/image/logo.svg'


export default function FooterBottom() {
  const [effect, setEffect] = useState(false);
  return (
    <div className="flex justify-evenly p-20 px-[5%] gap-8">
      <div>
        <div><Image width={150} src={bg1} alt={'ggpict'} /></div>
        <p className=''>Sekolah alam untuk bekal<br/>anak bangsa berdikari</p>
        <div className="flex gap-5 items-center">
          <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon /></div>
          <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon /></div>
          <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon /></div>
        </div>
      </div>
      <div>
        <div>Tautan Cepat</div>
        <div>Visi Kami</div>
        <div>Misi Kami</div>
      </div>
      <div>
        <div>Toko</div>
        <div>Product</div>
        <div>Web</div>
      </div>
    </div>
  );
}
