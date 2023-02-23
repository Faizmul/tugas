import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Buttons from "../atoms/Buttons";
import logo from "@/assets/image/logo.svg"

const PrimaryNavigation = () => {
	const [effect, setEffect] = useState(false);
	const userData = {
		name: "Jane Doe",
		email: "envkt@example.com",
		password: "password",
		role: "admin",
	};

	return (
		<nav className="flex items-center  justify-evenly flex-wrap rounded-xl bg-gray-50 p-1">
			<div className="w-full flex lg:flex lg:items-center lg:w-auto ">
				<ul className="lg:flex-grow ">
					<Link className="hyperlink text-slate-800 hover:text-blue-600" href="/">Home</Link>
					<Link className="hyperlink text-slate-800 hover:text-blue-600" href="/about">About</Link>
					<Link className="hyperlink text-slate-800 hover:text-blue-600" href="/blogs">Blog</Link>
				</ul>
				</div>
				<div className="items-center flex-shrink-0 text-slate-800 mr-6">
					<span className="font-semibold text-xl tracking-tight"><Image src={logo} alt="Logo" width={100} /></span>
				</div>
				<div>
					<Buttons action={(e) => { alert('Triggered') }} title="Login" buttonStyle="bg-slate-200" iconStyle="ml-[-2rem] hover:rotate-90" />
				</div>
		</nav>
	);
};

export default PrimaryNavigation;
