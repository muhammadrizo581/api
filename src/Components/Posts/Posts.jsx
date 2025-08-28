import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Posts.scss"
import errorImg from "../../assets/err-img.png"

const Posts = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get("https://jsonbek.uz/api/posts")
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
    }, [])

    return (
        <>          
            <section className='posts'>
              <div className='container'>
              {error && <div className='error'>
                        <img src={errorImg} />
                          <strong>{error?.message} <br/> Error on posts</strong>
                      </div>}
                    <div className='posts-wrapper'>            
                      {loading && <><strong className='loading'>Loading...</strong></>}
              
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
          
      </>
  )
}

export default Posts