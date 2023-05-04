import React from "react";

const index = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-20 mb-20  max-w-[1440px] m-auto">
      <div>
        <h1 className="text-6xl text-black font-bold text-center">
          Our Courses
        </h1>
        <p className="text-gray-600 text-xl font-bold text-center mt-8">
          Your first step is to define yourself. Your destiny is to redefine the
          world.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">
        {data.courses.map((course) => (
          <>
            <div className=" w-96 bg-base-100 shadow-xl  ">
              <img
                src={course.img}
                className="h-[260px] w-full p-5  "
                alt="Shoes"
              />

              <div className="card-body hover:bg-[#d1eefa]">
                <h2 className="card-title font-bold">{course.title}</h2>
                <div className="divider "></div>
                <p className="text-xl font-medium text-black ">
                  Language: {course.Language}
                </p>
                <p>{course.dis.slice(0, 100)}.....</p>

                <div className="flex ">
                  <p className="text-xl   ">
                    {" "}
                    <span className="font-bold text-[#ff7350] "> Price: </span>
                    {course.price} <span className="text-black">$</span>
                  </p>
                  <button className="text-[#ff7350] hover:text-black">
                    {" "}
                    read more ....
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default index;
export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  let data = await fs.readFile(filePath);
  data = JSON.parse(data);

  return {
    props: {
      data: data.data,
    },
  };
}
