import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className={`fill-in_item ${this.props.classLogin} `}>
        <label
          className={`request__form--label ${this.props.classLabel}`}
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
        <input
          className={`request__form--input ${this.props.classInput}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          required
        />
      </div>
    );
  }
}

export default Input;
