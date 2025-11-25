import React from "react";

function ListFilter() {
  const num = [24, 13, 44, 99, 34, 23];
  const colours = ["Purple", "Black", "Pink", "Golden", "Sliver"];

  const filtered = num.filter((e) => e % 2 == 0);

  return (
    <>
      <div>
        <h1>Filter</h1>
        <h3>even numbers are {filtered.join(", ")}</h3>
      </div>
      <div>
        <ul>
          {colours.map((colors, idx) => (
            <li key={idx}>{colors}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListFilter;
