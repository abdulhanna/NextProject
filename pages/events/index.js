import EventList from "../../componets/events/event-list";
import { getAllEvents } from "../../dummy-data";
import Search from "../../componets/search/search";
import {useRouter} from "next/router"



function events (){
     const events = getAllEvents();
    const router = useRouter();


     const findHandler = (year,month)=>{
       const fullpath = `/events/${year}/${month}`
       console.log(year,month)

       router.push(fullpath);

     }
  
    return (<div >
   <Search  onSearch={findHandler}/>
    <h2>All Events</h2>
        <EventList items={events}/>
    </div>)

}
export default events