import { CommonSEO } from "@/components/SEO";
import Footer from "@/components/molecules/Footer";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Slider from "@/components/molecules/Slider";
import FooterBottom from "@/components/molecules/FooterBottom";
import { Box } from "@mui/material";
import Medias from "@/components/molecules/Medias";
import Card from "@/components/atoms/Card";
import CardContent from "@/components/molecules/CardContent";
import Quotes from "@/components/molecules/Quotes";
import Introduce from "@/components/molecules/Introduce";

const index = () => {
	return (
		<BlankTemplate>
			<CommonSEO title="Home" description="Description of Create Next Page by Faizmul" />
			<PrimaryNavigation />
			<Slider />
			<Quotes />
			<Introduce />
			<Medias />
			<CardContent />
			{/* <IndexPage/> */}
			{/* <div className='flex px-[5%] mt-4 mb-1 justify-start items-baseline'>
				<p className="ml-2 uppercase font-[800] mr-2">kenalan dengan sekolah alam </p><h2 className="text-animation">pangrango.</h2>
			</div> */}
			<Box sx={{borderBottom: 1,borderColor: 'divider', width: '100%'}} />
			<FooterBottom />
			{/* <h1>Hello Guys!</h1>
			<p>Ini routing yang tersedia ya!</p>
			<ul className="flex flex-col">
				<Link className="hover:text-violet-500" href="/users">Users</Link>
				<Link className="hover:text-violet-500" href="/blogs">Blogs</Link>
				<Link className="hover:text-violet-500" href="/admin">Admin</Link>
				<Link className="hover:text-violet-500" href="/about">About</Link>
				<Link className="hover:text-violet-500" href="/404">Custom 404 Page</Link>
				<Link className="hover:text-violet-500" href="/api/hello">Hello API</Link>
			</ul> */}
			<Footer />
		</BlankTemplate>
	);
};

export default index;