import Contact from "@/components/molecules/Contact";
import FooterBottom from "@/components/molecules/FooterBottom";
import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from "@mui/material";

const about = () => {
  return (
    <BlankTemplate>
      <CommonSEO title="About" description="This is meta of about page" />
      <PrimaryNavigation/>
      <Contact title="Sekolah alam" style="flex"/>
      <Box sx={{borderBottom: 1,borderColor: 'divider', width: '100%'}} />
      <div className="flex gap-5 ml-2 mt-5 mb-5">
        <p>Bagikan :</p>
        <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon/></div>
        <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon/></div>
        <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon/></div>
      </div>
      <Box sx={{borderBottom: 1,borderColor: 'divider', width: '100%'}} />
      <div className="flex justify-center items-center mt-5">
      <h1 className="items-center">Our Social Media</h1>
      <div className="flex gap-5 ml-2 items-center">
        <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon/></div>
        <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon/></div>
        <div className=" bg-slate-300 p-2 rounded-md"><SpaIcon/></div>
      </div>
      </div>
      <Box sx={{borderBottom: 1,borderColor: 'divider', width: '100%'}} />
      <FooterBottom />
      <Box sx={{borderBottom: 1,borderColor: 'divider', width: '100%'}} />
      <Footer />
    </BlankTemplate>
  );
}

export default about;