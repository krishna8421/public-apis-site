import Image from 'next/image'
import Link from 'next/link'
import Logo from "../public/icon.png"
import style from "../styles/NavBar.module.scss"

function NavBar() {
    return (
        <nav className={style.navBar}>
            <div className={style.logo}>
                <h2>
                    Public
                </h2>
                <Image className={style.searchImg} src={Logo} alt="Logo of APIs" width="75" height="75"/>
            </div>
            <ul className={style.navButtons}>
                <li>
                        <a>Category</a>
                </li>
                <li>
                    <Link href="https://github.com/krishna8421/public-apis-site">
                        <a>Github</a>
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>  
        </nav>  
    )
}

export default NavBar
