import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const TempImg = [
    {
      img: "./images/T1.jpg",
      id: 1,
      category: "creative",
    },
    {
      img: "./images/T2.jpg",
      id: 2,
      category: "simple",
    },
    {
      img: "./images/T3.jpg",
      id: 3,
      category: "modern",
    },
    {
      img: "./images/T4.jpg",
      id: 4,
      category: "professional",
    },
    {
      img: "./images/T5.jpg",
      id: 5,
      category: "modern",
    },
    {
      img: "./images/T6.jpg",
      id: 6,
      category: "simple",
    },
  ];

  const [Temp_Data, setTemp_Data] = useState(TempImg);

  const TemplateFilter = (category) => {
    setTemp_Data(TempImg.filter((x) => x.category === category));
  };
  const AllTemplateFilter = () => {
    setTemp_Data(TempImg);
  };

  return (
    <div className="">
      <div className="resume container_fluid">
        <div className="heading">
          <h2>Choose Template</h2>
        </div>
        <div className="all__Category__btn">
          <div className="category__btn">
            <button onClick={() => AllTemplateFilter()}>All</button>
          </div>
          <div className="category__btn">
            <button onClick={() => TemplateFilter("creative")}>Creative</button>
          </div>
          <div className="category__btn">
            <button onClick={() => TemplateFilter("simple")}>Simple</button>
          </div>
          <div className="category__btn">
            <button onClick={() => TemplateFilter("professional")}>
              Professional
            </button>
          </div>
          <div className="category__btn">
            <button onClick={() => TemplateFilter("modern")}>Modern</button>
          </div>
        </div>
        <div className="template">
          {Temp_Data.map((item) => {
            return (
              <div className="col" key={item.id}>
                <img src={item.img} alt="" />
                <button
                  className="btn"
                  onClick={() => {
                    navigate(`/editor/${item.id}`);
                  }}
                >
                  use template
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
