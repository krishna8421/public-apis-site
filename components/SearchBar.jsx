import style from "../styles/SearchBar.module.scss"



function SearchBar() {
    return (
        <div className={style.searchDiv} >
            <input className={style.search} type="text" placeholder="Search . . ." /> 
        </div>
    )
}

export default SearchBar
