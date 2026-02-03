import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props: any) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>

        {/* Functional */}
        {/* <User name="Akshay (function)" /> */}

        {/* Class */}
        <UserClass name="First" location="Dehradun Class" />
      </div>
    );
  }
}

export default About;
