import React, { useState } from 'react';
import Footer from '../../Home/Footer';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}/>
            <AvailableAppointment selected={selected} />
           <Footer/>
        </div>
    );
};

export default Appointment;