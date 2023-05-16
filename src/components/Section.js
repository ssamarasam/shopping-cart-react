import React from "react";
import Courses from "../mocks/Courses";
import CourseCard from "./CourseCard";

function Section() {
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* <CourseCard /> */}
            {Courses.map((course) => {
              return <CourseCard data={course} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
