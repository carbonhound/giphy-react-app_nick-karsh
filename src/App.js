
import { ImageList, SearchBar } from "./components";
import { AppContextProvider } from "./context/appContext";
import './App.css';

function App() {
	return (
		<div className="App">
			<AppContextProvider>
				<SearchBar />
				<ImageList />
			</AppContextProvider>
		</div>
	);
}

export default App;
