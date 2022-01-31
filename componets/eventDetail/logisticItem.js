import style from "./logic-item.module.css"

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li  className={style.list} >
      <span  className={style.item}>
        <Icon />
      </span>
      <span  className={style.text}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
