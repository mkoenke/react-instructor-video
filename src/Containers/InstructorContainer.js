import React from "react"
import Form from "../Components/Form"
import Instructor from "../Components/Instructor"
import Search from "../Components/Search"

class InstructorContainer extends React.Component {
  state = {
    instructors: [
      { id: 1, name: "Steven", mod: 3 },
      { id: 2, name: "Caryn", mod: 2 },
      { id: 3, name: "Greg", mod: 1 },
    ],
    // filteredInsructors: [
    //   { id: 1, name: "Steven", mod: 3 },
    //   { id: 2, name: "Caryn", mod: 2 },
    //   { id: 3, name: "Greg", mod: 1 },
    // ],
    searchValue: "",
  }
  // instructor_names = () => [
  //   { id: 1, name: "Steven" },
  //   { id: 2, name: "Caryn" },
  //   { id: 3, name: "Greg" },
  // ]

  submitHandler = (obj) => {
    let newArray = [...this.state.instructors, obj]
    this.setState({ instructors: newArray })
  }
  searchHandler = (e) => {
    // console.log(e.target.value)
    this.setState({ searchValue: e.target.value })
  }

  filteredInstructors = () => {
    return this.state.instructors.filter((inst) =>
      inst.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    )
  }

  render() {
    console.log("new state", this.state.instructors)
    let instructors = this.filteredInstructors().map((instructorObj) => (
      <Instructor
        key={instructorObj.id}
        instructor={instructorObj}
        appClickHandler={this.props.appClickHandler}
      />
    ))
    return (
      <>
        <Search
          searchValue={this.state.searchValue}
          searchHandler={this.searchHandler}
        />
        <Form submitHandler={this.submitHandler} />
        {instructors}
      </>
    )
  }
}

export default InstructorContainer
