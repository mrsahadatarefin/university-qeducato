import React from 'react';
import monialCard from "./monialCard";
import coarch from "../SearchForCourse/SearchForCourse";

const testimonial = () => {
    const allData = [
        {
            "id": "1",
            "person": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_03.png",
            "name": "john duo",
            "profesion": "graphic designer",
            "text": "its awesome"
        },
        {
            "id": "2",
            "person": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_03.png",
            "name": "john duo",
            "profesion": "graphic designer",
            "text": "its awesome"
        },
        {
            "id": "3",
            "person": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_03.png",
            "name": "john ",
            "profesion": "graphic ",
            "text": "its awesome"
        },

    ]
    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className='text-xl text-red-500'>Testimonial</h2>
                <h1 className='text-5xl text-black my-3'>What Our Clients Says</h1>
            </div>
            <div className="grid grid-cols-3 m-20 gap-8  justify-center ">
                <div className="card w-96 text-black bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png" />
                    </figure>
                    <div className="card-body items-center text-center">

                        <p>This is one of the best platform for biggeners. the mantor was nice and he guide senciarly. i will recomand thisdite to my juniors.</p>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_03.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Roboto Eorure</h2>
                        <p>Web Developer</p>

                    </div>
                </div>
                <div className="card w-96 text-black bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>This is one of the best platform for biggeners. the mantor was nice and he guide senciarly. i will recomand thisdite to my juniors.</p>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Margie Does</h2>
                        <p>Web Designer</p>
                    </div>
                </div>
                <div className="card w-96 text-black bg-slate-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>This is one of the best platform for biggeners. the mantor was nice and he guide senciarly. i will recomand thisdite to my juniors.</p>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_02.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Rock Dloder</h2>
                        <p>Web Developer</p>
                    </div>
                </div>
                {/* {
                    allData.map(data => <monialCard
                        key={data.id}
                        data={data}
                    ></monialCard>)
                } */}
            </div>
        </div>
    );
};

export default testimonial;