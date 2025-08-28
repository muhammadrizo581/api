import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from "../../assets/user-img.jpeg"
import "./Users.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import errorImg from "../../assets/err-img.png"

const Users = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get("https://jsonbek.uz/api/users")
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
    }, [])
    
  return (
  <>
    <section className='users'>
      <div className='container'>
          {error && <div className='error'>
            <img src={errorImg} />
              <strong>{error?.message}<br/> Error on users</strong>
          </div>}
        <div className='users-wrapper'>            
        {loading && <><strong className='loading'>Loading...</strong></>}
          {
          data?.map((item, index) => (
              <div key={index} className='user'>
                <div className='user__img'>
                  <img src={img} alt="user" />
                </div>
                <div className='user__body'>
                  <h3>{item.name}</h3>
                  <p>Username: {item.username}</p>
                  <p>Email: {item.email}</p>
                  {item.hobbies.map((hobbi, i) => (
                    <span key={i}>
                      <strong>{i === 0 ? "Hobbilari:" : ""}</strong> {hobbi}
                      {i !== item.hobbies.length - 1 ? "," : "."}
                    </span>
                  ))}
                </div>
              </div>
            ))
          
          }
          </div>
          </div>
    </section>
  </>
);

}

export default Users