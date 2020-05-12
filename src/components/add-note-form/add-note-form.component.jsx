import React, { Component } from "react";

import "./add-note-form.style.scss";

class AddNote extends Component {
  constructor() {
    super();
    this.showTitleField = this.showTitleField.bind(this);
    this.hideTitleField = this.hideTitleField.bind(this);

    this.state = {
      titleFieldVisible: false,
    };
  }

  showTitleField() {
    this.setState({ titleFieldVisible: true });
  }

  hideTitleField() {
    console.log("This is being called");
    this.setState({ titleFieldVisible: false });
  }

  render() {
    return (
      <div>
        <div className="create-form">
          {this.state.titleFieldVisible && (
            <div className="backdrop" onClick={this.hideTitleField} />
          )}

          <form className="create-note">
            {this.state.titleFieldVisible && (
              <input
                onFocus={this.showTitleField}
                name="title"
                placeholder="Title"
              />
            )}

            <textarea
              onFocus={this.showTitleField}
              name="content"
              placeholder="Take a note..."
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddNote;
