import React from "react"

class Form extends React.Component {
  state = {
    name: "",
    mod: "",
  }

  changeHandler = (e) => {
    console.log("clicking", e.target.value)

    this.setState({ [e.target.name]: e.target.value })
    //     if (e.target.name === "name") {
    //       this.setState({ name: e.target.value })
    //     } else if (e.target.name === "mod") {
    //       this.setState({ mod: e.target.value })
    //     }
  }
  render() {
    return (
      <>
        <h1>Form</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.props.submitHandler({ name: e.target[0].value })
            this.setState({ name: "", mod: "" })

            console.log("Submitting", e.target[0].value)
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="enter instructor name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="number"
            name="mod"
            placeholder="enter mod number"
            value={this.state.number}
            onChange={this.changeHandler}
          />
          <input type="submit" value="create instructor" />
        </form>
      </>
    )
  }

  //   return (
  //     <>
  //       <h1>Form</h1>
  //       <form
  //         onSubmit={(e) => {
  //           e.preventDefault()
  //           props.submitHandler({ name: e.target[0].value })

  //           console.log("Submitting", e.target[0].value)
  //         }}
  //       >
  //         <input type="text" placeholder="enter instructor name" />
  //         <input type="submit" value="create instructor" />
  //       </form>
  //     </>
  //   )
}

export default Form
