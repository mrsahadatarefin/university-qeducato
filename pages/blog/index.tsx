import React from "react";

const index = () => {
  return (
    <div>
      {/* Start News */}
      <div className="hero py-20 " style={{ backgroundImage: `url("https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/bdrc-bg.png")` }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">News</h1>

            <button className="btn bg-orange-500 mt-20 px-10">Home </button>
          </div>
        </div>
      </div>
      {/* End News */}
      {/* Start Blogs */}
      <div className="flex flex-col">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Why children need a Healthy Environment thousands</h1>
            <p className="text-gray-600">Published on April 4, 2023</p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
              <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/inner_b6.jpg" alt="Blog Featured Image" className="mb-8" />
              <div className="prose max-w-none">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste porro eum autem. Quidem, error! Ab dolorem odit, minima pariatur molestias assumenda unde sequi consequuntur dignissimos praesentium quaerat explicabo dolorum.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Tag</h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      App
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Design
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Web Design
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Wordpress
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Branding
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Economics
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      Finance
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      High School
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/inner_b8.jpg" alt="blog" />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">Planting Seeds in the Hearts of Preschooler.</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>{" "}
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-orange-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
            <div className="p-6">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/inner_b9.jpg" alt="blog" />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">Why children need a Healthy Environment thousand.</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>{" "}
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-orange-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
            <div className="p-6">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/inner_b4.jpg" alt="blog" />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">Full-day kindergarten in Alberta kindergarten saves.</h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>{" "}
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-orange-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
