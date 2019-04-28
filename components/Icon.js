import React from "react";

const Icon = ({ name }) => {
	iconsList = {
		heart: "&#xe800;",
		star: "&#xe801;",
		like: "&#xe800;",
		dislike: "&#xe802;",
		flash: "&#xe803;",
		marker: "&#xf031;",
		filter: "&#xf0b0;",
		user: "&#xf061;",
		circle: "&#xf039;",
		hashtag: "&#xf029;",
		calendar: "&#xf4c5;"
	};

	let icon = iconsList[name];
	icon = icon.substr(3);
	icon = String.fromCharCode(parseInt(icon, 16));

	return <>{icon}</>;
};

export default Icon;
