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
                <p>A healthy environment helps children to stay physically healthy by reducing exposure to harmful pollutants, contaminants, and toxins. For example, clean air, water, and safe living conditions can prevent respiratory diseases, lead poisoning, and other illnesses that can negatively affect children's health..</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Tag</h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                    Major in Economics
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                    Biochemistry
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                    Business Media
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                    Corporate Finance
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
              <p className="mx-auto text-base leading-relaxed text-gray-500 text-justify">Model positive behavior: Children learn by observing and imitating adults around them. Therefore, it is essential to model positive behavior, such as kindness, honesty, and respect, to help preschoolers develop these qualities. Teach empathy: Preschoolers need to learn how to understand and share other people's feelings. Teachers and parents can help by reading books, playing games, or role-playing scenarios. </p>{" "}
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
              <p className="mx-auto text-base leading-relaxed text-gray-500 text-justify">Physical health: Children need access to clean air, water, and safe living conditions to maintain their physical health. A healthy environment can reduce exposure to harmful pollutants, contaminants, and toxins that can negatively impact children's health and increase the risk of chronic diseases. Mental health: A healthy environment can positively affect a child's mental health by reducing stress levels and promoting well-being.</p>{" "}
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
              <p className="mx-auto text-base leading-relaxed text-gray-500 text-justify">Improved academic outcomes: Full-day kindergarten provides more time for children to learn and practice skills, leading to improved academic outcomes. Studies have shown that full-day kindergarten students perform better on reading, writing, and math assessments than those in half-day programs. Increased social and emotional development: Full-day kindergarten provides more opportunities.</p>{" "}
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
