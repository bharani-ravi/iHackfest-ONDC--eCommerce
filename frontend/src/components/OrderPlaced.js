import "./OrderPlaced.css";
const OrderPlaced = () => {
  return (
    <div class="bg">
      <div class="main-container">
        <div class="check-container">
          <div class="check-background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="check-shadow"></div>
        </div>
        <div class="success">Order Placed</div>
      </div>
    </div>
  );
};

export default OrderPlaced;
