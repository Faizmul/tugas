import React, { useState } from "react";
import SpaIcon from '@mui/icons-material/Spa';
type props = {
	children?: React.ReactNode;
	title?: string;
	buttonStyle?: string;
	iconStyle?: string;
	action: (e: React.MouseEvent) => void;
};
const Buttons = ({ children, title, buttonStyle, iconStyle, action }: props) => {
	const [effect, setEffect] = useState(false);
	return title === "" ? <button onClick={(e) => { action(e) }}>{children}</button> : <button className={`py-2 px-5 ${buttonStyle} flex items-center rounded-md font-semibold popup`} onClick={(e) => { action(e) }}>
		{title}
		<span className={`${effect && 'rotate-45 duration-300'
			} text-green-700 mt-[0.1rem] h-20 w-[9rem] rotate-45 absolute hover:text-amber-600 duration-300 ${iconStyle}`}
			onClick={() => {
				setEffect(true);
			}}
			onAnimationEnd={() => setEffect(false)}
		>
			<SpaIcon />
		</span>
		</button>
};

		export default Buttons;
