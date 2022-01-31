 import {useRouter} from "next/router"
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../componets/eventDetail/event-summary";
import EventLogistics from "../../componets/eventDetail/event-logistic";
import EventContent from "../../componets/eventDetail/event-content";



 function EventDetail (){
     const router = useRouter();
     const eventId = router.query.eventId
     const event = getEventById(eventId)
     console.log(event);

     if (!event){
         return <p>not found!</p>
     }
    

return (
    <Fragment>
    <EventSummary title={event.title}/>
     <EventLogistics date={event.date} image={event.image} address ={event.location} imgAlt={event.title}/>
     <EventContent><p>{event.description}</p></EventContent>
    </Fragment>
)

 }
 export default EventDetail