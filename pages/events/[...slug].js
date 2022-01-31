import {useRouter} from "next/router"
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../componets/events/event-list";
import { Fragment } from "react";

function FilteredEventPage (){
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData);

    if(!filterData){
        return<p>Loading......</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear =+ filterYear;
    const numMonth =+ filterMonth ;

    if(isNaN(numYear) || isNaN(numMonth)  || numYear > 2030 ){
        return <p>choose valid year and month</p>
    }

    const filteredEvent = getFilteredEvents({
        year:numYear,
        month:numMonth,
    });

    if(!filteredEvent || filteredEvent.length === 0){
        return <p>Chose</p>
    }

  return <Fragment>
      <EventList items={filteredEvent}/>
  </Fragment>
 }
 export default FilteredEventPage