import React from "react"

class Instructor extends React.Component {
  instuctorClickHandler = () => {
    this.props.appClickHandler(this.props.instructor)
  }

  render() {
    return (
      <p onClick={this.instuctorClickHandler}>{this.props.instructor.name}</p>
    )
  }
}

// function Instructor(props) {
//   // console.log(props)
//   return <p onClick={props.appClickHandler}>{props.instructor.name}</p>
// }

export default Instructor
