import React, { Component } from 'react';
import TextInputStyledComponents from 'ps-react-virtuaboza/lib/TextInputStyledComponents';

export default class ExampleError extends Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="example-error"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}
