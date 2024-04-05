import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./Calendar.css"

const localizer = momentLocalizer(moment);

const myEventsList = [];

const MyCalendar = (props) => (
  <div className='calendar__container'>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"      
    />
  </div>
)

export default MyCalendar