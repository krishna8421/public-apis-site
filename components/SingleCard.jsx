import style from "../styles/SingleCard.module.scss"
import OpenButton from './OpenButton'
import CategoryTag from "./CategoryTag"

function SingleCard(props) {

    return (
        <div className={style.singleCard}>
            <h1>{props.API}</h1>
            <CategoryTag Category={props.Category}/>
            <p>{props.Description}</p>
            <div className={style.aboutAPI}>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Auth:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.Auth}</h4>
                <hr />
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTPS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.HTTPS}</h4>
                <hr />
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CORS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.CORS}</h4>
                <hr />
            </div>

            <OpenButton link={props.Link}/>
        </div>
    )
}

export default SingleCard
