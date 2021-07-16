import style from "../styles/OpenButton.module.scss"
import OpenLogo from "../public/open.svg"
import Image from 'next/image'

export default function openButton(props) {

    return (
        <a href={props.link} >
            <button className={style.openButton}>
                Open&nbsp;&nbsp;
                <Image src={OpenLogo} alt="Open Button" width="15" height="15"/>
            </button>
        </a>

    )
}
