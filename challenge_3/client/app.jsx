
var Form = function (props) {
  return (
    <button
      className='btn btn-primary btn-lg btn-block'
      onClick={props.checkout}>
      Checkout Now
    </button>
  );
};

var F1 = function (props) {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='name'>Name</label>
        <input type='text' className='form-control' id='name' placeholder='' value='' />
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-control' id='email' placeholder='you@example.com' value='' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-control' id='password' placeholder='' />
      </div>
      <hr className='mb-3' />
      <button className='btn btn-primary btn-lg'>Next</button>
    </form>
  );
};

var F2 = function (props) {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='address'>Address</label>
        <input type='text' className='form-control' id='address' />
      </div>
      <div className='mb-3'>
        <label htmlFor='address2'>Address 2</label>
        <input type='text' className='form-control' id='address2' />
      </div>
      <div className='row'>
        <div className='col-md-5 mb-3'>
          <label htmlFor='city'>City</label>
          <input type='text' className='form-control' id='city' />
        </div>
        <div className='col-md-4 mb-3'>
          <label for='state'>State</label>
          <input type='text' className='form-control' id='state' />
        </div>
        <div className='col-md-3 mb-3'>
          <label for='zip'>Zip</label>
          <input type='text' className='form-control' id='zip' placeholder='' />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='phone'>Phone Number</label>
        <input type='tel' className='form-control' id='phone' />
      </div>
      <hr className='mb-3' />
      <button className='btn btn-primary btn-lg'>Next</button>
    </form>
  );
};

var F3 = function (props) {
  return (
    <form>
      <div class='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='cc-number'>Credit card number</label>
          <input type='text' className='form-control' id='cc-number' placeholder='' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 mb-3'>
          <label htmlFor='cc-expiration'>Expiration</label>
          <input type='text' className='form-control' id='cc-expiration' placeholder='' />
        </div>
        <div className='col-md-3 mb-3'>
          <label htmlFor='cc-cvv'>CVV</label>
          <input type='text' className='form-control' id='cc-cvv' placeholder='' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='cc-zip'>Billing Zip Code</label>
          <input type='text' className='form-control' id='cc-zip' placeholder='' />
        </div>
      </div>
      <hr className='mb-3' />
      <button className='btn btn-primary btn-lg'>Next</button>
    </form>
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
    } else if (this.state.isF2 === true) {
      return (
        <F2 />
      );
    } else if (this.state.isF3 === true) {
      return (
        <F3 />
      );
    }
  }

}

ReactDOM.render(
  <Checkout />,
  document.getElementById('app')
);