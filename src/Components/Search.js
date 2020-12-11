import React from "react"

function Search(props) {
  return (
    <>
      <h1>Search Form</h1>
      <form>
        <input
          placeholder="search for instructor"
          value={props.searchValue}
          onChange={props.searchHandler}
        />
      </form>
    </>
  )
}

export default Search
