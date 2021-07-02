import React from "react";

class MenuItem extends React.Component {
  render() {
    return (
      <a href="{this.props.texto}" className="navbar--list--item-link">
        {this.props.texto}
      </a>
    );
  }
}

export default MenuItem;
