import React from "react";
import CircleType from "circletype";

export class ArcTitle extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
  }

  componentDidMount() {
    new CircleType(this.titleRef.current).radius(300);
  }

  render() {
    return (
      <div className="title" ref={this.titleRef}>
        {this.props.children}
      </div>
    );
  }
}
