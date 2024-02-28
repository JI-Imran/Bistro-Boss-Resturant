import React from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-20">
        <div className="bg-slate-950 bg-opacity-40 pt-8">

      <SectionTitle subHeading={"Check It Out"} heading={"Featured Item"} />
      <div className="  md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20 , 2029</p>
          <p className=" uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            laudantium eius laboriosam totam accusantium, dolore nesciunt
            delectus debitis eveniet cum ipsam culpa commodi vel sunt qui
            perferendis quas, quos quasi! Debitis, commodi voluptates. Quae
            assumenda ea suscipit, aliquid fugit, consequuntur, voluptate
            aperiam nisi quidem quibusdam voluptatibus eligendi. Quas, officiis
            nisi.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Featured;
