import React from 'react'
import './Blog.css'
import blogImage from '../../assets/blog/blog.jpg'

const Blog = () => {
  return (
    <>
    <section id="blog">
      <div className="container">
        <div className="blog_wrapper">
          <div className="blog_col">
            <h3>WE HELP BUSINESS LAUNCH, GROW AND SUCCEED </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid nobis vitae praesentium animi ratione, beatae excepturi suscipit culpa enim dignissimos ipsa, sunt, iusto recusandae itaque odit maxime alias corrupti.</p>
            <div className="btn_wrapper">
              <a href="/" className="btn">Get Started</a>
            </div>
          </div>
          <div className="blog_col">
            <div className="blog_image">
              <img src={blogImage} alt="Blog" />
            </div>
          </div>

        </div>
      </div>
      </section>     
    </>
  )
}

export default Blog
9