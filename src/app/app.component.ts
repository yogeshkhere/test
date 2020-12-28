import { Component } from '@angular/core';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Event Title');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); 

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEvents(events: EventApi[]) {
    console.log('-------------list of evengts',events)
    this.currentEvents = events;
  }
}
