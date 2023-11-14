import { useEffect, useState, ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
	children?: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? ReactDOM.createPortal(
				children,
				document.querySelector("#modal-root") as Element
		  )
		: null;
};

export default Portal;
