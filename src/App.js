import React from "react"
import "./App.css"
import Header from "./Components/Header"
import AnimeContainer from "./Containers/AnimeContainer"
import InstructorContainer from "./Containers/InstructorContainer"

class App extends React.Component {
  state = { instructor: {} }
  appClickHandler = (instructorObj) => {
    console.log("In App.js", instructorObj)
    this.setState({ instructor: instructorObj })
  }
  render() {
    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </>
    )
  }
}
// function App() {
//   // const instructor_names = [
//   //   { id: 1, name: "Steven" },
//   //   { id: 2, name: "Caryn" },
//   //   { id: 3, name: "Greg" },
//   // ]
//   return (
//     <>
//       <Header />
//       <InstructorContainer />
//       <AnimeContainer />
//     </>
//   )
// }

export default App
