import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
          
      </>
  )
}

export default Posts