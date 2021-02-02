import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import useAxios from "./useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });
  console.log(loading, JSON.stringify(data), error);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"} </h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
