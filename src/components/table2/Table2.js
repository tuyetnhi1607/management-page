import React, { useState, useEffect, useCallbacks } from "react";
import "boxicons";
import "./table2.scss";

function Table2(props) {
  const { dataHeader, dataBody, renderHeader, renderBody, limit} = props;
  const initState =
    limit !== undefined && dataBody.length > limit
      ? [...dataBody].slice(0, limit)
      : [...dataBody];
  const [data, setData] = useState(initState);
  const [currPage, setCurrPage] = useState(0);
  const selectPage = (page) => {
    const start = page * limit;
    const end = start + limit;
    setData(dataBody.slice(start, end));
    console.log("pages ", start, end);
    setCurrPage(page);
  };
  var numPage = 0;
  var range = [];
  if (limit !== undefined) {
    numPage = Math.ceil(dataBody.length / limit);
    range = [...Array(numPage).keys()];
    console.log("pages ", range);
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {dataHeader.map((item, index) => renderHeader(item, index))}
          </tr>
        </thead>
        <tbody>{data.map((item, index) => renderBody(item, index))}</tbody>
      </table>
      <div className="pages">
        {numPage > 1
          ? range.map((item, index) => (
              <div
                className={`pages-item ${currPage === index ? "active" : ""}`}
                key={index}
                onClick={() => selectPage(index)}
              >
                {item + 1}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Table2;
