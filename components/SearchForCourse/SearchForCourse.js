import React from 'react';

const SearchForCourse = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-20" style={{ backgroundImage: `url("https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/search_bg.png")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-2/6 lg:text-left">

                </div>
                <div className="card flex-shrink-0 w-4/6 shadow-2xl ">
                    <div className="card-body">
                        <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-white">Search For Course</h1>
                        <p className="py-6 text-xl text-gray-300 ">Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            <input type="text" placeholder="Your Name" className="input input-bordered textarea-ghost bg-white w-full max-w-xs my-2 ms-5" />
                            <input type="text" placeholder="Your Email" className="input input-bordered textarea-ghost bg-white w-full max-w-xs my-2 ms-5" />
                            <select className="select select-bordered textarea-ghost bg-white text-black w-full max-w-xs my-2 ms-5">
                                <option disabled selected>Instructor</option>
                                <option>Brus Willish/(phd)/</option>
                                <option>Greedo</option>
                            </select>
                            <select className="select select-bordered textarea-ghost bg-white  text-black w-full max-w-xs my-2 ms-5">
                                <option disabled selected>Depertment</option>
                                <option>BBA</option>
                                <option>BA</option>
                            </select>
                            <select className="select select-bordered textarea-ghost bg-white text-black w-full max-w-xs my-2 ms-5">
                                <option disabled selected>Campus</option>
                                <option>Adman's Hall</option>
                                <option>Udreedo 80</option>
                            </select>
                            <select className="select select-bordered textarea-ghost bg-white  text-black w-full max-w-xs my-2 ms-5">
                                <option disabled selected>Level</option>
                                <option>Graduate</option>
                                <option>Undergraduate</option>
                            </select>
                        </div>
                        <div className="form-control mt-6 w-full lg:pl-5 md:pl-5 lg:pr-10 md:pr-20">
                            <button className="btn btn-error text-white">Search Courses Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForCourse;