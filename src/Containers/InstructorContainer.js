import React from "react"
import Form from "../Components/Form"
import Instructor from "../Components/Instructor"

class InstructorContainer extends React.Component {
  state = {
    instructors: [
      { id: 1, name: "Steven", mod: 3 },
      { id: 2, name: "Caryn", mod: 2 },
      { id: 3, name: "Greg", mod: 1 },
    ],
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

  render() {
    console.log("new state", this.state.instructors)
    let instructors = this.state.instructors.map((instructorObj) => (
      <Instructor
        key={instructorObj.id}
        instructor={instructorObj}
        appClickHandler={this.props.appClickHandler}
      />
    ))
    return (
      <>
        <Form submitHandler={this.submitHandler} />
        {instructors}
      </>
    )
  }
}

export default InstructorContainer
