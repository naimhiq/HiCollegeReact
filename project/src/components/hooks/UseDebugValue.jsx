import React from "react";
import { fetchData } from "./customHooks/fetchData";
const UseDebugValue = () => {
	console.log(
		fetchData("https://jsonplaceholder.typicode.com/posts/1/comments")[0]
	);
	return (
		<div>
			<h1>UseDebugValue hook - see dev-tools for label</h1>
		</div>
	);
};

export default UseDebugValue;
