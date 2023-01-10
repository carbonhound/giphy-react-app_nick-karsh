import { useCallback, useEffect, useState } from "react";
import { ASYNC_STATUS } from "../constants/LoadingStates";
import { useAppContext } from "../context/appContext";

export const useAsync = ({ asyncFunction, immediate = true }) => {
	const {setAppLoadingStatus} = useAppContext()
	const [value, setValue] = useState(null);
	const [error, setError] = useState(null);
	// The execute function wraps asyncFunction and
	// handles setting state for pending, value, and error.
	// useCallback ensures the below useEffect is not called
	// on every render, but only if asyncFunction changes.
	const execute = useCallback(() => {
		setAppLoadingStatus(ASYNC_STATUS.PENDING);
		setValue(null);
		setError(null);
		return asyncFunction()
			.then((response) => {
				setValue(response);
				setAppLoadingStatus(ASYNC_STATUS.SUCCESS);
			})
			.catch((error) => {
				setError(error);
				setAppLoadingStatus(ASYNC_STATUS.ERROR);
			});
	}, [asyncFunction]);

	// Call execute if we want to fire it right away.
	// Otherwise execute can be called later, such as
	// in an onClick handler.
	useEffect(() => {
		if (immediate) {
			execute();
		}
	});
	return { execute, value, error };
};