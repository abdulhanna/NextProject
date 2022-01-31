import EventItem from "./event-item";
function EventList (props){
    const{items} = props;
    console.log(items);
    return(<>
        <ul>
      {items.map(event => <EventItem 
      key={event.id}
      id={event.id}
       title={event.title}
       description={event.description} 
           image={event.image}
           date={event.date}
           location ={event.location}
       />)}
        
        </ul>
    </>)
}
export default EventList