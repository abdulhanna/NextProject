 import Link from "next/link";
 import style from "./main-header.module.css";

 function MainHeader (){
     return <header className={style.head}>
         <div className={style.logo}>
          <Link href="/">Next Event</Link>
         </div>
         <nav className={style.nav}>
             <ul>
                 <li>
                     <Link href="/events">Browse All Events</Link>
                 </li>
             </ul>
         </nav>
     </header>

 }
 export default MainHeader