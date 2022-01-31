import AddressIcon from "./../icons/address-icon";
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from "../icons/arrow-rigth-icon";
import LogisticsItem from "./logisticItem";
import style from "./event-logistic.module.css"


function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
   const addressText = address.replace(', ', '\n');

  return (
    <section  className={style.container}>
      <div className={style.content} >
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul  className={style.block}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
