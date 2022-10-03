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

export default function Viewall() {
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

  return (
    <>
      <Header />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        <Link to="/">
          <button className="btn btn-light" align="right">
            🔙Back
          </button>
        </Link>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h3 className="mt-3 text-center">All Products</h3>
      {/* Search and Sort Start */}
      <div className="search m-2" align="right">
        <div className="d-flex flex-row-reverse col-md-3 ">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="1">Low to High</option>
            <option value="-1">High to Low</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      {/* Search and Sort End */}
      <Row justify="center" gutter={16}>
        {content.map((product) => {
          let path = `http://localhost:8989/uploads/${product.image}`;
          console.log("path", path);
          return (
            <Col lg={6} sm={24} xs={24}>
              <div className="product p-2 bs1 mt-3">
                <img src={path} className="productimg" />

                <div className="product-content d-flex align-items-center justify-content-between">
                  <div>
                    <p className="text-right">
                      <strong>{product.productName}</strong>
                    </p>

                    <p>
                      <strong>Price: ₹</strong>
                      {product.price}
                    </p>
                  </div>

                  <div>
                    <br />
                    <br />

                    <Button
                      className="btn btn-info"
                      type="success"
                      block
                      onClick={() => send(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
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
