import React, {
	createContext, useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { ASYNC_STATUS } from "../constants/LoadingStates";
import GiphyService from "../services/GiphyService";
// Create the context
const AppContext = createContext({});

// Define the default context state
const appDefaultState = {
	imageList: [],
	appStatus: ASYNC_STATUS.IDLE,
};

// Create method to use context
function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		// TODO: replace with proper error handling
		throw new Error(`useAppContext must be used within a AppContextProvider`);
	}
	const [appState, setAppState] = context;

	// Context Methods //
const loadImageList = useCallback(async () => {
	try {
		const imageList = await GiphyService.listGifs()
		setAppState(prev =>({
			...prev,
			imageList
		}))
	} catch (e) {
		console.error(e)
	}

}, [setAppState])


	// Context Methods //
const searchImageList = useCallback(async (params) => {
	try {
		const imageList = await GiphyService.searchGifs(params)
		setAppState(prev =>({
			...prev,
			imageList
		}))
	} catch (e) {
		console.error(e)
	}

}, [setAppState])

	const setAppLoadingStatus = (loadingStatus) => {

		setAppState(prev =>({
			...prev,
			appStatus: loadingStatus
		}))
	}


	
	// Return state and Context Methods
	// Note: DO NOT return "setstate".State updates should be managed through context methods
	return {
		loadImageList,
		searchImageList,
		setAppLoadingStatus,
		appState
	};
}

// Create the context provider
function AppContextProvider(props) {
	const [appState, setAppState] = useState(appDefaultState);
	const value = useMemo(() => [appState, setAppState], [appState]);
	return <AppContext.Provider value={value} {...props} />;
}

export { AppContextProvider, useAppContext };
