import Link from "next/link";
import styles from "./event-item.module.css"
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-rigth-icon";
import AddressIcon from "../icons/address-icon";


function EventItem (props){
    const{id,title,description,image,date,location} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-Us',{
        day:'numeric',
        month:'numeric',
        year:'numeric'
    });
    const formatedAddress = location.replace(',','\n')
    const exploreLink = `/events/${id}`;
    return(
    <>
    <li className={styles.item}>
        <img  src={image} alt={title}/>
        <div className={styles.content}>
            <div>
            <h2 className={styles.title}>{title}</h2>
            
            <div className={styles.icon}>
            <DateIcon />
            <time>{humanReadableDate}</time>
           </div>


            <div className={styles.address}><AddressIcon/><address>{formatedAddress}</address></div>
            <div><p>{description}</p></div>
            </div>
        </div>
            <div className={styles.action}><Button link={exploreLink}>
                <span>Explore event</span>
                <span className={styles.icon}><ArrowRightIcon/></span>
            </Button></div>
    </li>

    </>)
}
export default EventItem