import React from "react";
import { useState } from "react";

function CourseCard(props) {
  //   let itemAdded = false;
  const [itemAdded, setItemAdded] = useState(false);
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={props.data.courseImg}
            alt="..."
            style={{ width: "100%", height: "110px" }}
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.data.courseName}</h5>
              <span class="text-muted text-decoration-line-through">
                ${props.data.originalPrice}
              </span>
              ${props.data.offerPrice}
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              {!itemAdded && (
                <button
                  class="btn btn-outline-dark mt-auto"
                  href="#"
                  onClick={() => {
                    console.log("course: ", props.data);
                    props.handleAddtoCart(props.data);
                    setItemAdded(!itemAdded);
                  }}
                >
                  Add to cart
                </button>
              )}
              {itemAdded && (
                <button
                  class="btn btn-outline-dark mt-auto"
                  href="#"
                  onClick={() => {
                    props.handleRemoveItem(props.data);
                    setItemAdded(!itemAdded);
                  }}
                >
                  Remove Item
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
