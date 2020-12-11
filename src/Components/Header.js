import React from "react";

// function Header(props) {
//   console.log(props);
//   let instructors = props.instructors.map(function (instructor_name) {
//     return <Biline name={instructor_name} />;
//   });
//   return (
//     <div>
//       <h1>Welcome to our App!</h1>
//       {instructors}
//     </div>
//   );
// }

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { color: "red" };
  //   // console.log("In the Container");
  // }
  state = { color: "red" };
  // instructors = () => {
  //   return this.props.instructors.map(function (instructor_name) {
  //     return <Biline name={instructor_name} />;
  //   });
  // };

  clickHandler = () => {
    // console.log("Clicked!");
    if (this.state.color === "red") {
      this.setState({ color: "blue" });
    } else this.setState({ color: "red" });
  };

  render() {
    console.log("in our render", this.state);
    // let instructors = this.props.instructors.map(function (instructor_name) {
    //   return <Biline name={instructor_name} />;
    // });
    return (
      <div>
        <h1
          onClick={this.clickHandler}
          style={{
            "border-style": "dashed",
            "border-color": `${this.state.color}`,
          }}
        >
          Welcome to our App!
        </h1>
      </div>
    );
  }
}

export default Header;
