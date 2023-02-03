import React from "react";
import water from "../images/water.jpg";
import {Link} from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={water} alt="water" />
        <div className="user">
          <img src={water} alt="" />
          <div className="info">
            <span>Jhon</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <BiEdit className="delete" />
            </Link>

            <MdDelete className="delete" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dicta.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum quia voluptatibus quos! Nam veritatis, consequuntur quidem ipsa deleniti iste eligendi optio praesentium dolore eveniet odit aliquid deserunt, facere velit ex sequi repellat sit excepturi quae. Veritatis molestiae officiis debitis asperiores esse. Laboriosam laborum quae earum a, sed dicta modi.
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus repellat, aliquid at tempora voluptates odit, non iure incidunt et quas officia consequuntur voluptate cum impedit adipisci, autem quam doloremque?
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere consequatur deserunt quisquam. Natus beatae voluptatibus eum adipisci quas aperiam fuga ad blanditiis praesentium ducimus, magni eaque dolore eius similique sint molestias provident itaque temporibus nam magnam libero quisquam totam. Officiis corporis quibusdam, voluptates ex tempora veritatis ut voluptatum aperiam ab nobis. Ea nam quia nesciunt, veritatis est sapiente consectetur delectus enim officiis ad molestias asperiores nostrum, laudantium quos totam. Voluptate quae, itaque explicabo, eveniet modi voluptatibus accusantium assumenda repudiandae voluptatum ipsa nostrum sunt quo, veniam sapiente eligendi sed corrupti. Neque eveniet voluptate quae! Excepturi exercitationem quas consequatur reprehenderit. Beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident corporis ullam harum ratione consectetur eum dolores vel earum iste veniam temporibus vitae, et fugiat maiores necessitatibus obcaecati delectus quas quo? Ut totam ex, consectetur possimus itaque at optio facilis consequatur, odit veniam nemo sequi rem maiores. Est, voluptas accusantium!</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
