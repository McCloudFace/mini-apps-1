
var Form = function (props) {
  return (
    <div>
      <button onClick={props.handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.state = { form: 'index' };
  }

  handleCheckout() {
    this.setState({ form: 'f1' });
    console.log('this.state.form: ', this.state.form);
  }

  render() {
    const formPage = this.state.form;

    if (formPage === 'index') {
      return (
        <Form onClick={this.handleCheckout} />
      );
    }
  }

}

ReactDOM.render(
  <Checkout />,
  document.getElementById('app')
);