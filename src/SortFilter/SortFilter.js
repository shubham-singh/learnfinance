import { useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";

const SortFilter = () => {
  const [open, setOpen] = useState(null);

  if (open === "sort") {
    return (
      <div>
        <Sort setOpen={setOpen} />
      </div>
    );
  } else if (open === "filter") {
    return (
      <div>
        <Filter setOpen={setOpen} />
      </div>
    );
  } else {
    return (
      <div className="alert mb-m p-s sort-filter hide-d">
        <div className="sort-filter" onClick={() => setOpen("filter")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
          <span className="ml-s">Filter</span>
        </div>

        <div className="sort-filter" onClick={() => setOpen("sort")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
          </svg>
          <span className="ml-s">Sort</span>
        </div>
      </div>
    );
  }
};

export default SortFilter;
