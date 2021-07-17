import style from "../styles/SearchBar.module.scss"
import Delete from "../public/delete.svg";
import Image from 'next/image'

function SearchBar(prop) {
    return (
        <div className={style.searchDiv} >
            <input className={style.search} id="inputField" onChange={prop.searchFunction} type="text" placeholder="Search . . ." />
            <button className={style.clear} onClick={prop.deleteSearchData} >
                <Image className={style.searchImg} priority={true} src={Delete} alt="Delete Button" width="20" height="20"/>
            </button>
        </div>
    )
}

export default SearchBar
