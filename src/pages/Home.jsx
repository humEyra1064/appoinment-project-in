import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {doctorData} from "../helper/data"
import {appointmentData} from "../helper/data"
import { useState } from "react"
const Home = () => {
  const [doctors, setDoctors] = useState(doctorData)
  const [appointments, setAppointments] = useState(appointmentData)
  
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors doctors={doctors} 
      appointment={appointments}
      setappointment={setAppointments}
      />
      <AppointmentList />
    </main>
  )
}

export default Home
