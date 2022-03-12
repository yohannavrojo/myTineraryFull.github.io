import React from "react";
import { actionType } from "../../reducer";
import "../search/Search.css";
import { useStateValue} from "../../StateProvider";

const Search = () => {
  const [{cities},dispatch]=useStateValue()
    const inputSearch=(event)=>(
        dispatch({
          type:actionType.FILTER,
         value:event.target.value
        })

    )

  return (
    <>
      <div   className="wrappers">
        <div className="container">
          <div className="search_wrap search_wrap_4">
            <div className="search_box">
              <div id="myInput" onkeyup="myFunction()" className="btn btn_common">
                <i className="fas fa-search"></i>
              </div>
              <input type="text"  onChange={inputSearch} className="input" placeholder="search..." />
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Search;
