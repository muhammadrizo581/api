import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Products.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import errorImg from "../../assets/err-img.png"

const Products = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get("https://jsonbek.uz/api/products")
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(()=> setLoading(false))
    }, [])
  return (
      <>
          
        <section className='products'>
              <div className='container'>
                {error &&
                  <div className='error'>
                      <img src={errorImg} />
                      <strong>{error?.message} <br/> Error on products</strong>
                  </div>}
                    <div className='products-wrapper'>            
                        {loading && <><strong className='loading'>Loading...</strong></>}                        
          
                    {
                      data?.map((item, index) =>{
                          return (
                            <div key={index} className='product'>
                                <div className='product__img'>
                                  <img src={item.image} />
                              </div>
                              <div className='product__body'>
                                <h3>{item.name}</h3>
                                <p>Title: {item.title}</p>
                                <p>Description: {item.description}</p>
                                      <strong>{ item.price} so'm</strong>
                              </div>
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

export default Products