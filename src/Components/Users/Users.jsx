import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from "../../assets/user-img.jpeg"
import "./Users.scss"

const Users = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonbek.uz/api/users")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally()
    }, [])
    
  return (
      <section className='users'>
          <div className='container'>
                <div className='users-wrapper'>
                  {
                      data?.map((item, index) =>{
                          return (
                            <div key={index} className='user'>
                                <div className='user__img'>
                                  <img src={img} />
                              </div>
                              <div className='user__body'>
                                <h3>{item.name}</h3>
                                <p>Username: {item.username}</p>
                                <p>Email: {item.email}</p>
                                {
                                  item.hobbies.map((hobbi, i) => (
                                    <span key={i}>
                                      <strong>{i === 0 ? "Hobbilari:" : ""}</strong> {hobbi}{i !== item.hobbies.length - 1 ? "," : "."}
                                  </span>
                                ))
                                }

                              </div>
                            </div>
                        )
                      })
                    }
                </div>
          </div>
    </section>
  )
}

export default Users