import React from "react";
import { Imagelist } from "../../Services/Auth.Image";
import { useEffect, useState } from "react";
export default function Carousal() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const showdata = async () => {
      const result = await Imagelist();
      const arr = result.data.result;
      setShow(arr);
      console.log(arr);
    };
    showdata();
  }, []);

  return (
    <>
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner mt-3">
          {show.map((data) => {
            let path = `http://localhost:8989/uploads/${data.image}`;
            return (
              <>
                <div class="carousel-item active">
                  <img src={path} style={{ width: "100%", height: "500px" }} />
                </div>
              </>
            );
          })}
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </>
  );
}
