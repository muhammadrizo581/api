import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Posts.scss"

const Posts = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonbek.uz/api/posts")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally()
    }, [])

    return (
        <>
          <Header/>
            <section className='posts'>
              <div className='container'>
                  <div className='posts-wrapper'>
                    {
                      data?.map((item, index) =>{
                        return (
                          <div key={index} className='posts'>
                            <h3>ID: {item.id}</h3>
                              <p>Name: {item.author}</p>
                            <p>Title: {item.title}</p>
                              <p>{item.body}</p>
                          </div>                            
                        )
                      })
                    }
                </div>
              </div>
            </section>
          <Footer/>
      </>
  )
}

export default Posts