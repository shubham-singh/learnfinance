import { useProduct } from "../Product/ProductContext";

const Sort = (props) => {
  const { productDispatch } = useProduct();

  return (
    <div className="popup">
      <div className="popup-empty" onClick={() => props.setOpen(null)}></div>
      <div className="popup-content popup-half shadow">
        <div className="popup-heading">
          <h3>Sort by</h3>
          <svg
            onClick={() => {
              props.setOpen(null);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
            props.setOpen(null);
          }}
        >
          <span>Low to high</span>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
            props.setOpen(null);
          }}
        >
          <span>High to low</span>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "REMOVE_SORT" });
            props.setOpen(null);
          }}
        >
          <span>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
