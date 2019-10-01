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
          //   id={this.props.id}
          type={this.props.type}
          //   name={this.props.name}
          placeholder={this.props.placeholder}
          //   minLength={this.props.minLength}
          //   pattern={this.props.pattern}
          //   onChange={this.props.action}
          required
        />
      </div>
    );
  }
}

export default Input;
