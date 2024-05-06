import React from "react";

const CommDropDown = ({
	classNameBtn,
	children,
	isDropDownOpen,
	setIsDropDownOpen,
	selectedItem,
}) => {
	return (
		<div className="dropdown inline-block relative w-full">
			<button
				onClick={() => setIsDropDownOpen(true)}
				type="button"
				className={classNameBtn}>
				<span className="mr-1">{selectedItem}</span>
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20">
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
				</svg>
			</button>
			<ul
				className={`dropdown-menu absolute  w-[100%] rounded-lg mt-2 ml-2 shadow-md z-10 ${
					isDropDownOpen ? "block" : "hidden"
				} text-gray-700 pt-1`}>
				{children}
			</ul>
		</div>
	);
};

export default CommDropDown;
