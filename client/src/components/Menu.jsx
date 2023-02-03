import React from 'react'
import Water from "../images/water.jpg"

const Menu = () => {

    const posts = [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum  quaerat!",
        img: Water,
      },
      {
        id: 2,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
        img: Water,
      },
      {
        id: 3,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
        img: Water,
      },
      
    ];

  return (
    <div className='menu'>
      <h1>Other Posts You May Like</h1>
      {posts.map((post) =>(
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
