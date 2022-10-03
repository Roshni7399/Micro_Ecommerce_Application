import React, { useState, useEffect } from "react";
import { Productslist } from "../../Services/Auth.Product";
import Header from "../../Components/Header/Header";
import { Col, Row, Button } from "antd";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Components/style.css";
import Carousal from "../Carousal/Carousal";
import { searchData } from "../../Services/Auth.Product";

export default function Cards() {
  let navigate = useNavigate();

  const [data, setdata] = useState([]);
  console.log(data);

  const dispatch = useDispatch();
  const [update, setupdate] = useState([]);

  const send = (e) => {
    console.log(e);
    setupdate(e);
    dispatch(ADD(e));
    toast.success(
      "Product is added in your cart😊",
      {
        position: toast.POSITION.TOP_CENTER,
      },
      { autoClose: 1000 }
    );
  };

  // Sort
  const [sort, setSort] = useState("");

  // Paginate
  const [page, setPage] = useState({});
  const [content, setContent] = useState([]);
  const [select, setSelect] = useState(1);

  const handlePageClick = (data) => {
    setSelect(data.selected + 1);
  };

  useEffect(() => {
    const test = async () => {
      const response = await Productslist(6, select, sort);
      setContent(response.data.result.docs);
      setPage(response.data.result.totalPages);
    };
    test();
  }, [select, sort]);

  const handleView = () => {
    navigate("/view-all");
  };

  const searchHandler = async (e) => {
    console.log(e);
    const response = await searchData(e);
    console.log(response.data.result);
    setContent(response.data.result);
  };

  return (
    <>
      <Header />
      <Carousal />
      <h3 className="mt-3 text-center">Recommended Products</h3>

      {/* Search and Sort Start */}
      <div className="search m-2" align="right">
        <div className="d-flex flex-row-reverse col-md-3 ">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <u
            className="col-md-2"
            style={{ color: "green" }}
            onClick={handleView}
          >
            <h6> View-all</h6>
          </u>
          <input
            type="text"
            placeholder="Search"
            class="form-control"
            onChange={(e) => searchHandler(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="1">Low to High</option>
            <option value="-1">High to Low</option>
          </select>
        </div>
      </div>
      {/* Search and Sort End */}

      <div class="container">
        <div class="row" id="ads">
          {content.map((product) => {
            let path = `http://localhost:8989/uploads/${product.image}`;
            console.log("path", path);
            return (
              <div class="col-md-2">
                <div class="card rounded">
                  <div class="card-image">
                    <img src={path} className="productimg" />
                  </div>
                  <div class="card-image-overlay m-auto"></div>
                  <div class="card-body text-center">
                    <div class="ad-title m-auto">
                      <h5>{product.productName}</h5>
                      <p>Price :{product.price}</p>
                      <p>Desc:&nbsp;{product.desc}</p>
                    </div>
                    <button
                      className="btn btn-primary"
                      type="success"
                      block
                      onClick={() => send(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <center>
        {/* pagination */}
        <div class="page_box">
          <p></p>
          <nav aria-label="Page navigation example">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={page}
              previousLabel="<<"
              renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
            />
          </nav>
        </div>
      </center>
      <Footer />
    </>
  );
}
