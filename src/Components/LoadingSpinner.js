import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center" Style="width: 90vw;height: 100vh;" >
      <div className="spinner-border" Style="margin-top:250px" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow" Style="width: 3rem;margin-top:250px" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}