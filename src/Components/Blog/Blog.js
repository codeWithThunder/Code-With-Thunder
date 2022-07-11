import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import BCards from "./BCards/BCards";

const Blog = () => {
  const [services, setServices] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setServices(json));

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <h4 className="font-bold text-gray-700 md:text-3xl md:ml-11 text-xl md:text-left text-center ml-0 my-12">
          CodeWithThunder Blog ({services.length})
        </h4>
        <div className="mx-auto">
          {services.map((service) => (
            <BCards key={service.id} service={service}></BCards>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
