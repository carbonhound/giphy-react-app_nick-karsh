import './SearchBar.scss'
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useAsync } from "../../hooks/useAsync";
export const SearchBar = () => {
	const [searchValue, setSearchValue] = useState()
	const {searchImageList} = useAppContext()
	const handleSetSearchValue = (event) => {
		setSearchValue(event.target.value)
	}
	const handleSearchGiphy = async () => {
		await searchImageList({q: searchValue})
	}
	const {execute: refreshList} = useAsync({asyncFunction: handleSearchGiphy, immediate:false})

 return <div className='search-bar'>
	 <label for='search'>Search Gifs!</label>
	 <input onChange={handleSetSearchValue} id='search' type={'search'} />
	 <button onClick={refreshList}>Search</button>
 </div>
}