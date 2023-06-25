import { useEffect, useState, useDebugValue } from "react";
import axios from "axios";
export const fetchData = (url) => {
	// useDebugValue is used on custom hooks to debug a label on dev-tools
	useDebugValue(url);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	async function fetchComments() {
		try {
			const { data } = await axios.get(url);
			setResponse(data);
		} catch (error) {
			setError(error);
		}
	}
	useEffect(() => {
		fetchComments();
	}, [setError, setResponse, url]);

	useDebugValue("This is important url");
	return [response, error];
};
