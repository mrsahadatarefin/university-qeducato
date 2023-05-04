import React from "react";

const CampusFacilities = () => {
  return (
    <div  style={{ backgroundColor: "#f0f7ff" } } className="mt-20 max-w-[1444px] m-auto">
      <h1 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-4xl pl-10 pt-10 text-center  ">Campus Facilities</h1>
      <div className="-mx-4 flex flex-wrap p-8">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3  " style={{ backgroundColor: "#f0f7ff" }}>
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 ">
            <div className="mx-auto mb-7 flex justify-center items-center  ">
              <img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pHLfJGPp4m1_9txqvo0vL0kAOe3Tsi0_vy8LVz5By_VTwfD6&s" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center ">Free Wi-Fi Access</h3>
              <p className="text-base font-medium text-body-color text-center ">Students are given access to high speed internet all over the campus through wifi.</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3 " style={{ backgroundColor: "#f0f7ff" }}>
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 ">
            <div className="mx-auto mb-7  flex justify-center items-center">
              <img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDwHReNzg_Fn0fE3BEditSq8JB5Yu1Z2tt4K3QcfEtguAlW0&s" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">Highly Equipped Labs</h3>
              <p className="text-base font-medium text-body-color text-center">There are labs equipped with modern instruments in every relevant department.</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3" style={{ backgroundColor: "#f0f7ff" }}>
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 flex justify-center items-center">
              <img width="100" height="100" src="https://cdn-icons-png.flaticon.com/512/2247/2247664.png" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">Extra Curricular Activities</h3>
              <p className="text-base font-medium text-body-color text-center">Students can participate in various extra curricular activities through various clubs.</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3" style={{ backgroundColor: "#f0f7ff" }}>
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 flex justify-center items-center">
              <img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmw77MhoY36Fq9pew6hPjh883EnPY2JQQhg&usqp=CAU" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">Rich Library</h3>
              <p className="text-base font-medium text-body-color text-center">The university has a fully air-conditioned and computerized rich library.</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3" style={{ backgroundColor: "#f0f7ff" }}>
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 flex justify-center items-center">
              <img width="100" height="100" src="https://www.hotelishwarinn.com/wp-content/uploads/2019/08/air-conditioner.svg" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">AC Class Rooms</h3>
              <p className="text-base font-medium text-body-color text-center">Classrooms are air conditioned, so the students can study in comfort.</p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3" style={{ backgroundColor: "#f0f7ff" }}>
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 flex justify-center items-center">
              <img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aZHT_Gf4Z6YPINYBzb39U4YccKxwxOZC1A&usqp=CAU" />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">Up to 75% Waiver</h3>
              <p className="text-base font-medium text-body-color text-center">Meritorious students are rewarded with up to 75% waiver based on several criterias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFacilities;
