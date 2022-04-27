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
 
 
      {/* onuevo search */}

      <form action="" class="search-bar">
	<input type="search" name="search" onChange={inputSearch} pattern=".*\S.*" required/>
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
</form>
 
    



    </>
  );
};

export default Search;
