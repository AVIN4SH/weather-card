import React from "react";

function ShimmerUi() {
  return (
    <div className="card sm:card-side bg-base-100 md:shadow-2xl mx-auto my-4 p-4">
      <figure>
        <div className="w-[240px] h-[280px] skeleton  bg-no-repeat bg-cover" />
      </figure>
      <div className="card-body w-80">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
}

export default ShimmerUi;
