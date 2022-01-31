import { getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'
import EventList from '../componets/events/event-list'

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
     <h2>Home page</h2>
     <EventList items={featuredEvents }/>
     

    </div>
  )
}
