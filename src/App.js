import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  const Courses = [
    {
      courseName: "NodeJs",
      originalPrice: "300.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      offerPrice: "250.00",
    },
    {
      courseName: "ExpressJs",
      originalPrice: "250.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      offerPrice: "150.00",
    },
    {
      courseName: "MongoDB",
      originalPrice: "100.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb-svgrepo-com.svg/640px-Mongodb-svgrepo-com.svg.png",
      offerPrice: "50.00",
    },
    {
      courseName: "SQl",
      originalPrice: "100.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png",
      offerPrice: "55.00",
    },
    {
      courseName: "HTML5",
      originalPrice: "100.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
      offerPrice: "55.00",
    },
    {
      courseName: "JavaScript",
      originalPrice: "100.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/640px-Javascript-736400_960_720.png",
      offerPrice: "55.00",
    },
    {
      courseName: "React JS",
      originalPrice: "100.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
      offerPrice: "55.00",
    },
    {
      courseName: "CSS3",
      originalPrice: "100.00",
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/CSS_icon.svg/640px-CSS_icon.svg.png",
      offerPrice: "55.00",
    },
  ];
  const heading = "Shop the courses!";
  const tagLine = "15% flat offer till June";

  const [cartList, setCartList] = useState([]);
  function handleAddtoCart(course) {
    let tempList = [...cartList];
    tempList.push(course);
    console.log("Adding: ", tempList);
    setCartList(tempList);
  }

  function handleRemoveItem(course) {
    let tempList = [...cartList];
    console.log(tempList);
    let newList = tempList.filter(
      (temp) => temp.courseName !== course.courseName
    );
    setCartList(newList);
  }
  return (
    <div className="App">
      <Navbar listCount={cartList.length} />
      <Header heading={heading} tag={tagLine} />
      <Section
        handleAddtoCart={handleAddtoCart}
        handleRemoveItem={handleRemoveItem}
      />
      <Footer />
    </div>
  );
}

export default App;
