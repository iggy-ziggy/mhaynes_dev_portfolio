import React, { useEffect, useState } from "react";
import TestingButton from "./TestingButton";
import SphereCanvas from "../Sphere/Sphere";
import Placeholder from '../../assets/generic_placeholder_500x500_pink.png'
import "./Testing.css";

const test_array = [
  {
    name: "item 0",
    place: 0,
  },
  {
    name: "item 1",
    place: 1,
  },
  {
    name: "item 2",
    place: 2,
  },
  {
    name: "item 3",
    place: 3,
  },
  {
    name: "item 4",
    place: 4,
  },
  {
    name: "item 5",
    place: 5,
  },
  {
    name: "item 6",
    place: 6,
  },
  {
    name: "item 7",
    place: 7,
  },
  {
    name: "item 8",
    place: 8,
  },
  {
    name: "item 9",
    place: 9,
  },
  {
    name: "item 10",
    place: 10,
  },
  {
    name: "item 11",
    place: 11,
  },
];

// const TestingContainer = () => {
//   const [queue, setQueue] = useState([
//     test_array[2],
//     test_array[1],
//     test_array[0],
//   ]);

//   console.log(queue);

//   useEffect(() => {
//     const next = queue[0].place + 1;
//     if (next < test_array.length) {
//       console.log(`Item ${next} is next`);
//     }
//   }, [queue]);

//   const findNextItem = () => {
//     const next = queue[2].place + queue.length;
//     if (next < test_array.length) {
//       const nextItem = test_array[next];
//     //   queue.pop();
//     //   queue.unshift(nextItem);
//     //   const newQueue = [...queue];
//     //   setQueue(newQueue);
//     setQueue([nextItem, ...queue.slice(0, -1)])
//     }
//   };

//   return (
//     <>
//       <div className="test_container">
//         <h1>Test 1</h1>
//         <div className="test1">
//             {test_array.map((item) => (
//               <TestingButton key={item.place} value={item.name} />
//             ))}
//         </div>
//         <h1>Test 2</h1>
//         <div className="test2">
//           {queue.map((item) => (
//             <TestingButton key={item.place} value={item.name} />
//           ))}
//         </div>
//         <button className="next" onClick={() => findNextItem()}>
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

const TestingContainer = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleVideos = () => {
    if (currentIndex + 3 > projects.length) {
      return [
        ...projects.slice(currentIndex),
        ...projects.slice(0, (currentIndex + 3) % projects.length),
      ];
    }
    return projects.slice(currentIndex, currentIndex + 3);
  };

  return (
    <div className="carousel_container">
      <div className="carousel">
        <button className="scroll_btn" onClick={handlePrev}>Prev</button>
        <div className="projects">
          {getVisibleVideos().map((project, index) => (
              // <TestingButton key={index} value={project.name} />
              <div key={index} className="project">
                <h2 className="project_title">{project.name}</h2>
              </div>
          ))}
        </div>
        <button className="scroll_btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default TestingContainer;
