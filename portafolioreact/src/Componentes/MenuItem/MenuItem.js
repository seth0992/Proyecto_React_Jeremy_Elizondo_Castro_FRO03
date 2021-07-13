import React from "react";
import { Link } from "react-router-dom";
class MenuItem extends React.Component {
  render() {
    return (
      <Link to={"/" + this.props.texto} className="navbar--list--item-link">
        {this.props.texto}
      </Link>
    );
  }
}

export default MenuItem;
