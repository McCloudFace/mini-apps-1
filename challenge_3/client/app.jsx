
var Form = function (props) {
  return (
    <button onClick={props.checkout}>
      Checkout
    </button>
  );
};

var F1 = function (props) {
  return (
    <div>This is F1</div>
  );
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.state = {
      isIndex: true,
      isF1: false,
      isF2: false,
      isF3: false
    };
  }

  handleCheckout() {
    this.setState({ isIndex: false, isF1: true });
    console.log('this.state.isF1: ', this.state.isF1);
  }

  render() {

    if (this.state.isIndex === true) {
      return (
        <Form checkout={this.handleCheckout.bind(this)} />
      );
    } else if (this.state.isF1 === true) {
      return (
        <F1 />
      );
    }
  }

}

ReactDOM.render(
  <Checkout />,
  document.getElementById('app')
);