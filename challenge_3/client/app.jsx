
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
        <input type='text' className='form-control' id='name' value='' />
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-control' id='email' value='' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-control' id='password' />
      </div>
      <hr className='mb-3' />
      <button
        className='btn btn-primary btn-lg'
        id='f1Next'
        onClick={props.handleNext}>Next
      </button>
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
          <input type='text' className='form-control' id='zip' />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='phone'>Phone Number</label>
        <input type='tel' className='form-control' id='phone' />
      </div>
      <hr className='mb-3' />
      <button
        className='btn btn-primary btn-lg'
        id='f2Next'
        onClick={props.handleNext}>Next
      </button>
    </form>
  );
};

var F3 = function (props) {
  return (
    <form>
      <div class='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='ccNumber'>Credit card number</label>
          <input type='text' className='form-control' id='ccNumber' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 mb-3'>
          <label htmlFor='ccExpiration'>Expiration</label>
          <input type='text' className='form-control' id='ccExpiration' />
        </div>
        <div className='col-md-3 mb-3'>
          <label htmlFor='ccCvv'>CVV</label>
          <input type='text' className='form-control' id='ccCvv' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='ccZip'>Billing Zip Code</label>
          <input type='text' className='form-control' id='ccZip' />
        </div>
      </div>
      <hr className='mb-3' />
      <button
        className='btn btn-primary btn-lg'
        id='f3Next'
        onClick={props.handleNext}>Next
      </button>
    </form>
  );
};

var Confirmation = function (props) {
  return (
    <div className='row'>
      <div className='col-md-8 order-md-1'>
        <div className='mb-3'>
          <p>Name: {props.name}</p>
          <p>Address: {props.address}</p>
          <hr className='mb-3' />
          <button className='btn btn-primary btn-lg'>Purchase</button>
        </div>
      </div>
    </div>
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
      isF3: false,
      isConfirmation: false,
      name: '',
      email: '',
      password: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      ccNumber: '',
      ccExpiration: '',
      ccCvv: '',
      ccZip: ''
    };
  }

  handleCheckout() {
    this.setState({ isIndex: false, isF1: true });
    console.log('this.state.isF1: ', this.state.isF1);
  }

  handleNext(e) {
    // TODO:
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
    } else if (this.state.isConfirmation === true) {
      return (
        <Confirmation />
      );
    }
  }

}

ReactDOM.render(
  <Checkout />,
  document.getElementById('app')
);