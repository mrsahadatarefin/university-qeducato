import { GetStaticProps } from "next";
import React from "react";

export const getServerSideProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  const courses = await res.json();
  return {
    props: {
      courses,
    },
  };
};

const courses = () => {
  return <div></div>;
};

export default courses;
