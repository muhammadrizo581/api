import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Products.scss"

const Products = () => {
        const [data,setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonbek.uz/api/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally()
    }, [])
  return (
      <>
        <section className='products'>
              <div className='container'>
                  <div className='products-wrapper'>
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