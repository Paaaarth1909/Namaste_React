import React from "react";

class UserClass extends React.Component<
  { name: string; location?: string },
  { userInfo: any }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: null,
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/Paaaarth1909");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + " Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {avatar_url && <img src={avatar_url} alt="user avatar" />}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @parthsaarthie19</h4>
      </div>
    );
  }
}

export default UserClass;
