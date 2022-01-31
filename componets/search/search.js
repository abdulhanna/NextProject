import {getFilteredEvents} from "../../dummy-data";
import {useRef} from "react";
import style from "../search/search.module.css"

function Search  (props){
    // const filtered = getFilteredEvents();

    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const year = yearInputRef.current.value;
        const month = monthInputRef.current.value; 
        props.onSearch(year,month)
    }
    
    return <form onSubmit={handleSubmit}>
        <div className={style.container}>
        <h4>Search</h4>
            <div  className={style.control}>
                <label htmlFor="year">Year</label>
                <select id="year" ref={ yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={style.control}>
            <label htmlFor="month">Month</label>
                <select id="month" ref={monthInputRef}>
                <option value="1">January</option>
                <option value="2">Februart</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
                </select>
            </div>
            <div><button onClick={handleSubmit}>find Event</button></div>
        </div>
    </form>

}

export default Search