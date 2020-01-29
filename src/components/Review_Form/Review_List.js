import React, { Component } from "react";


class Review_List extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: ""
  };


  renderResults = () => {
    const text = this.props.text;
    if (Object.keys(text).length && text.length) {
      return (
        <div className="results-container">
          {text.map((review, index) => {
            return (
              <div key={index} className="result-item">
                  {text.text}
              </div>
            );
          })}
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  };
  render() {
    console.log(this.props.ideas);
    return <>{this.renderResults()}</>;
  }
}

export default Review_List;