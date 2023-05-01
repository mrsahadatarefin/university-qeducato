import React from "react";

const index = () => {
  return (
    <div>
      <div className="p-6 bg-blue-eyes" style={{ backgroundColor: "#125875" }}>
        <div className="flex flex-wrap items-center w-full max-w-5xl p-5   mx-auto text-left   rounded lg:flex-nowrap md:p-8 ">
          <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
            <h3 className="mb-2 text-3xl font-bold text-white ">Subscribe For Newsletter</h3>
            <p className="text-white">Manage Your Business With Our Software</p>
          </div>
          <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
            <form>
              <input type="hidden" name="tags" value="earlyaccess" />
              <div className="flex flex-col sm:flex-row">
                <input type="email" id="email" name="email" placeholder="Enter your email address" className="flex-1 px-3 py-2" />
                <button type="submit" className="w-full px-6 py-4 mt-5 text-white bg-gray-800 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap dark:bg-gray-700">
                  {" "}
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
