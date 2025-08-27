import React from 'react'
import userImg  from "../../assets/user-img.jpeg"
import "./Header.scss"

const Header = () => {
  return (
      <section className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-wrapper__logo'>
                      <img src={userImg} />
                      <a><span>Users</span></a>
                  </div>
                  <div className='header-wrapper__lists'>
                      <ul>
                          <li>
                              <a href=''>
                                  <span>Posts</span>
                              </a>
                          </li>
                          <li>
                              <a href=''>
                                  <span>Products</span>
                              </a>
                          </li>
                        </ul>
                  </div>
                </div>
          </div>
    </section>
  )
}

export default Header