import React from "react";

class Reloj extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.iteracion(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  iteracion() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <span className="reloj">{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default Reloj;
