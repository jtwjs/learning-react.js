import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm && typeof callback !== "function") {
    return;
  }
  if (!onCancle && typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="App">
      <h1> Hi </h1>
      <button onClick={() => confirmDelete()}>delete world </button>
    </div>
  );
}
