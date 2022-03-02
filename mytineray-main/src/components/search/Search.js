import React from "react";
import "../search/Search.css";


const Search = () => {
  return (
    <>
      <div   className="wrappers">
        <div className="container">
          <div className="search_wrap search_wrap_4">
            <div className="search_box">
              <div id="myInput" onkeyup="myFunction()" className="btn btn_common">
                <i className="fas fa-search"></i>
              </div>
              <input type="text" className="input" placeholder="search..." />
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Search;
