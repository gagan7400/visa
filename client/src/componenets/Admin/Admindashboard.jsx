import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
export default function Admindashboard() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:4567/api/contact").then((result) => result.json()).then((res) => {
      setData(res.contacts.reverse())
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <AdminNavbar/>
      <h1 className=' fs-1 text-white bg-info px-3 py-2  w-75 mx-auto' > Admin Dashboard </h1>
      <div className="contact-data w-75 mx-auto" style={{ height: "100vh", overflow: "auto" }}>
        <table className="table p-1 m-2 border bg-info text-white  mx-auto">
          <thead>
            <tr>
              <th scope="col" className='bg-secondary border  text-white' >#</th>
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
                  <th scope="col" className='bg-info border text-white'>{v.date}</th>
                  <th scope="col" className='bg-info border text-white'>{v.name}</th>
                  <th scope="col" className='bg-info border text-white'>{v.email} </th>
                  <th scope="col" className='bg-info border text-white'>{v.country}</th>
                  <th scope="col" className='bg-info border text-white'>{v.countrycode} {v.number}</th>
                  <th scope="col" className='bg-info border text-white'> {v.whatsupcountrycode} {v.whatsupnumber}</th>
                  <th scope="col" className='bg-info border text-white'>{v.visacountry}</th>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}
