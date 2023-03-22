import React from 'react';
import { useState, } from 'react';
import {useTheme} from '@mui/material'
import { EditingState, ViewState,IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView, 
  DayView,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  EditRecurrenceMenu,
  CurrentTimeIndicator,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import './style.css';
import { token } from '../../theme';

const appointments = [
  { id:1,startDate: '2023-03-20T09:45', endDate: '2023-03-20T11:00', title: 'Meeting' },
  { id:2,startDate: '2023-03-22T12:00', endDate: '2023-03-22T13:30', title: 'Lunch' },
];

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const Calendar = () => {
    const [currentViewName,setCurrentViewName] = useState('Week');
    const [addedAppointment, setAddedAppointemnt] = useState({});
    const [changedAppointment, setChangedAppointemnt] = useState({});
    const [editingAppointment, setEditingdAppointemnt] = useState(undefined);
    console.log(changedAppointment,editingAppointment);
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    const [data, setData] = useState(appointments);

    function commitChanges({ added, changed, deleted }) {
      console.log("CommitChanges part:-",added,changed,deleted);
       if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData(data=>[...data, { id: startingAddedId, ...added, startDate: formatDate(added.startDate), endDate: formatDate(added.endDate), }]);
        
      }
       if (changed) {
        setData(data.map((appointment) => {
          if (changed[appointment.id]) {
            const { startDate, endDate, ...rest } = changed[appointment.id];
            return {
              ...appointment,
              ...rest,
              startDate: startDate ? formatDate(startDate) : appointment.startDate,
              endDate: endDate ? formatDate(endDate) : appointment.endDate,
            };
          }
          return appointment;
        }));      
      }
      if (deleted !== undefined) {
        setData(data.filter((appointment) => appointment.id !== deleted));
      }
      console.log("Data:- ",data)
    }

 return( 
  <Scheduler
    data={data}
    height="100%"
    backgroundColor={colors.grey[300]}
  >
  
    <ViewState
      defaultCurrentDate="2023-03-22"
      currentViewName={currentViewName}
      onCurrentViewNameChange = {setCurrentViewName}
    />
    <EditingState
      onCommitChanges={commitChanges}
      addedAppointment={addedAppointment}
      onAddedAppointmentChange={setAddedAppointemnt}
      appointmentChanges={changedAppointment}
      onAppointmentChangesChange={setChangedAppointemnt}
      editingAppointment={editingAppointment}
      onEditingAppointmentChange={setEditingdAppointemnt}
    />

    <WeekView
      startDayHour={9}
      endDayHour={22}
    />
    <MonthView />
    <DayView />
    <IntegratedEditing />
     <Toolbar  />
     <DateNavigator  />
     <TodayButton  />
     <ViewSwitcher />
     <EditRecurrenceMenu />
    <ConfirmationDialog />
    <Appointments />
    <AppointmentTooltip
            showCloseButton
            showOpenButton
          />
    <DragDropProvider />
    <CurrentTimeIndicator
      shadePreviousCells={true}
      shadePreviousAppointments={true}
      updateInterval={1000}
    />
    <AppointmentForm />
  </Scheduler>
 )
};

export default Calendar;
