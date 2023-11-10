import React from "react";
import Card from "./Card";
import { useState } from "react";

function Cards({ courses, category }) {
  const allCourses = [];
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;