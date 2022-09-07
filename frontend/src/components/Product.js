import React from "react";
import Navbar from "./Navbar";
import "./Product.css";
const Product = () => {
  <Navbar />;

  return (
    <div class="details">
      <div class="img">
        <img
          src="https://rukminim1.flixcart.com/image/416/416/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70"
          alt=""
          class="img-pic"
        />
        <div class="flex">
          <div class="add-to-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <button>ADD TO CART</button>
          </div>
          <div class="by-now">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div class="desc">
        <h1>NAME</h1>
        <br />
        <hr />
        <div class="inc-dec">
          <h1>PRICE</h1>
          <div class="inc-dec-flex">
            <button class="btn-red">-</button>
            <span>1</span>
            <button class="btn-green">+</button>
          </div>
        </div>
        <hr />
        <br />
        <div class="status">
          <h3>Status</h3>
          <h4>Out of stock</h4>
        </div>
        <hr />
        <br />
        <div class="description">
          <h3>Description :</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            voluptas iusto totam harum officia laborum omnis repudiandae!
            Aperiam, voluptatibus eum similique placeat eos, ad tempore, et sunt
            amet minima explicabo!
          </p>
        </div>

        <br />
        <hr />
        <div class="delivery">
          <span>Delivery</span>
          <div class="delivery-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <input type="text" placeholder="Enter delivery pincode" />
            <span>Check</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
