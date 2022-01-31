import Link from "next/link"
import styles from "./button.module.css"

function Button (props){
    return <Link href={props.link}>
    <a className={styles.button}>{props.children}</a>
    </Link>

}
export default Button