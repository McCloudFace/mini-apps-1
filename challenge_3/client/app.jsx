import React from 'react';
import ReactDOM from 'react-dom';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hello React</p>
      </div>
    );
  }

}

export default Checkout;

ReactDOM.render(
  <Checkout />,
  document.getElementById('app')
);