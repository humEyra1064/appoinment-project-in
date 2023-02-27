import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {doctorData} from "../helper/data"
import { useState } from "react"
const Home = () => {
  const [doctors, setDoctors] = useState(doctorData)
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors doctors={doctors}/>
      <AppointmentList />
    </main>
  )
}

export default Home
