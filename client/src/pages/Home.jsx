import React from 'react'
import {Link} from 'react-router-dom'
import Water from "../images/water.jpg"

const Home = () => {

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
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
      img: Water,
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
      img: Water,
    },
    {
      id: 6,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
      img: Water,
    },
    {
      id: 7,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
      img: "https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1211152561.jpg?w=713",
    },
    {
      id: 8,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam explicabo harum deserunt delectus atque sed quam, in quisquam quaerat!",
      img: "https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1211152561.jpg?w=713",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <div className='aft'></div>
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home
