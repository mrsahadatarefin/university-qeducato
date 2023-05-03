import React from "react";

const index = () => {
  return (
    <div>
      {/* Start Contact */}
      <div className="hero py-20 " style={{ backgroundImage: `url("https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/bdrc-bg.png")` }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">Contact</h1>

            <button className="btn  mt-20 px-10" style={{ backgroundColor: "#ff7350" }}>
              Home{" "}
            </button>
          </div>
        </div>
      </div>
      {/* End Contact */}
      {/* Start Appointment */}
      <section className="py-12  text-gray-100 sm:py-12 lg:py-16 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl xl:text-5xl mb-6">Make Appointment</h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9" style={{ backgroundColor: "#eff7ff" }}>
                  <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                  <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>
                  <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10 text-center">+1 (444) 000-8888</h3>
                  <p className="mt-6 text-base text-gray-600 text-center">Phone Support</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
              <div className="p-9" style={{ backgroundColor: "#fff7ef" }}>
                <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827"></rect>
                <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                <path d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                <path d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z" stroke="#111827" stroke-width="2"></path>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10 text-center">jobs@webtrueexample.com</h3>
                <p className="mt-6 text-base text-gray-600 text-center">Email Address</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9" style={{ backgroundColor: "#eff7ff" }}>
                  <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                  <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                  <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>
                  <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827" stroke-width="2" stroke-linecap="round"></ellipse>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10 text-center">12/A, New Jone, NYC</h3>
                  <p className="mt-6 text-base text-gray-600 text-center">Office Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment */}
      {/* Start Maps */}
      <div className="relative w-full h-96">
        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus" aria-hidden="false"></iframe>
      </div>
      {/* End Maps */}
      <div className=" py-10 rounded-lg " style={{ backgroundColor: "#e7f0f8" }}>
        <div className=" text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">Custom Inqure Form</div>
        <div className="p-8 max-w-[1444px] m-auto">
          <div className="flex gap-4">
            <input type="Name" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Your Name *" />
            <input type="email" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Your Email *" />
          </div>
          <div className="my-6 flex gap-4">
            <input type="text" name="text" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Your Number *" />
            <input type="text" name="text" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Your WhatsApp *" />
          </div>
          <div className="">
            <textarea name="textarea" id="text" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">
              Message
            </textarea>
          </div>
          <div className="text-center">
            <a className="cursor-pointer rounded-lg  px-8 py-5 text-sm font-semibold text-white" style={{ backgroundColor: "#ff7350" }}>
              Make An Request{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
