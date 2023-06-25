import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const UseMemo = () => {
	const [comments, setComments] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		console.log("run only once");
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1/comments")
			.then((response) => {
				const { data } = response;

				setComments(data);
				console.log(comments);
			});
	}, []);

	const printNames = (comments) => {
		// this gets re-computed whenever button toggle is clicked
		console.log("this is a computed value");
		if (comments) {
			return comments.map((item) => {
				return <li key={item.id}>{item.name}</li>;
			});
		}
	};

	// use memo to memorize function, recomputed only when data changes. When toggling it will not re-computed again
	const getPrintNames = useMemo(() => printNames(comments), [comments]);

	return (
		<div>
			<h1>UseMemo</h1>
			<ul>{getPrintNames}</ul>
			{/*printNames() it will recomputed the function and whenever we toggle button -check console */}
			<button onClick={() => setToggle(!toggle)}>Toggle</button>
			{toggle && <span>Toggle</span>}
		</div>
	);
};

export default UseMemo;
