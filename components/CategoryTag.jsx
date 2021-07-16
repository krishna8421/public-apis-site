import style from "../styles/CategoryTag.module.scss"

function CategoryTag(props) {
    return (
        <div className={style.tagDiv}>
            {props.Category}
        </div>
    )
}

export default CategoryTag
