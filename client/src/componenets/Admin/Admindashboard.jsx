import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseconfig/firebase';
export default function Admindashboard() {

  const [data, setData] = useState([])
  useEffect(() => {
    getdata()

  }, [])
  let getdata = async () => {
    try {
      let collect = collection(db, "contacts");
      let docref = await getDocs(collect)
      let a = [];
      await docref.forEach((res) => { a = [...a, { id: res.id, data: res.data() }] });
      setData(a);
      console.log(a)
    }
    catch (err) { console.log(err) }
  }
  return (
    <div>
      <AdminNavbar />
      <h1 className=' fs-1 text-white bg-info px-3 py-2  w-75 mx-auto' > Admin Dashboard </h1>
      <div className="contact-data w-75 mx-auto" style={{ height: "100vh", overflow: "auto" }}>
        <table className="table p-1 m-2 border bg-info text-white  mx-auto">
          <thead>
            <tr>
              <th scope="col" className='bg-secondary border  text-white' >S.NO</th>
              <th scope="col" className='bg-primary  border text-white' >Date </th>
              <th scope="col" className='bg-primary  border text-white' >Name</th>
              <th scope="col" className='bg-primary  border text-white' >Email Address</th>
              <th scope="col" className='bg-primary border text-white' >Country</th>
              <th scope="col" className='bg-primary border text-white' >Number</th>
              <th scope="col" className='bg-primary border text-white' >WhatsupNumber</th>
              <th scope="col" className='bg-primary border text-white' >Visa Category</th>
          
            </tr>
          </thead>
          <tbody>
            {data && data.map((v, i) => {
              return (
                <tr key={i}>
                  <th scope="col" className='bg-secondary border text-white'>{i + 1}</th>
                  <th scope="col" className='bg-info border text-white'>{v.data.date}</th>
                  <th scope="col" className='bg-info border text-white'>{v.data.name}</th>
                  <th scope="col" className='bg-info border text-white'>{v.data.email} </th>
                  <th scope="col" className='bg-info border text-white'>{v.data.country}</th>
                  <th scope="col" className='bg-info border text-white'>{v.data.countrycode} {v.data.number}</th>
                  <th scope="col" className='bg-info border text-white'>   {v.data.whatsupnumber}</th>
                  <th scope="col" className='bg-info border text-white'>{v.data.visacountry}</th>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}
