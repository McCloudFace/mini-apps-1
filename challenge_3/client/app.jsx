
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
        <input type='text' className='form-control' id='name' value={props.name} onChange={props.handleChange} />
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-control' id='email' value={props.email} onChange={props.handleChange} />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-control' id='password' value={props.password} onChange={props.handleChange} />
      </div>
      <hr className='mb-3' />
      <button
        className='btn btn-primary btn-lg'
        id='F1'
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
        <input type='text' className='form-control' id='address' value={props.address} onChange={props.handleChange} />
      </div>
      <div className='mb-3'>
        <label htmlFor='address2'>Address 2</label>
        <input type='text' className='form-control' id='address2' value={props.address2} onChange={props.handleChange} />
      </div>
      <div className='row'>
        <div className='col-md-5 mb-3'>
          <label htmlFor='city'>City</label>
          <input type='text' className='form-control' id='city' value={props.city} onChange={props.handleChange} />
        </div>
        <div className='col-md-4 mb-3'>
          <label htmlFor='state'>State</label>
          <input type='text' className='form-control' id='state' value={props.state} onChange={props.handleChange} />
        </div>
        <div className='col-md-3 mb-3'>
          <label htmlFor='zip'>Zip</label>
          <input type='text' className='form-control' id='zip' value={props.zip} onChange={props.handleChange} />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='phone'>Phone Number</label>
        <input type='tel' className='form-control' id='phone' value={props.phone} onChange={props.handleChange} />
      </div>
      <hr className='mb-3' />
      <button
        className='btn btn-primary btn-lg'
        id='F2'
        onClick={props.handleNext}>Next
      </button>
    </form>
  );
};

var F3 = function (props) {
  return (
    <form>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='ccNumber'>Credit card number</label>
          <input type='text' className='form-control' id='ccNumber' value={props.ccNumber} onChange={props.handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 mb-3'>
          <label htmlFor='ccExpiration'>Expiration</label>
          <input type='text' className='form-control' id='ccExpiration' value={props.ccExpiration} onChange={props.handleChange} />
        </div>
        <div className='col-md-3 mb-3'>
          <label htmlFor='ccCvv'>CVV</label>
          <input type='text' className='form-control' id='ccCvv' value={props.ccCvv} onChange={props.handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='ccZip'>Billing Zip Code</label>
          <input type='text' className='form-control' id='ccZip' value={props.ccZip} onChange={props.handleChange} />
        </div>
      </div>
      <hr className='mb-3' />
      <button
        className='btn btn-primary btn-lg'
        id='F3'
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
    this.handleNext = this.handleNext.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);

    this.state = {
      // whichForm: 'index',
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

  handleCheckout(e) {
    this.setState({ isIndex: false, isF1: true });
  }

  handleChange(e) {
    var key = e.target.id;
    var val = e.target.value;
    this.setState({ [key]: val });
  }

  handleNext(e) {
    // TODO:
    // do DB stuff
    //   post form data to server end point(s)

    // setState for next form
    var formBtn = e.target.id;
    console.log('formBtn: ', formBtn);
    if (formBtn === 'F1') {
      this.setState( (prevState) => ({
        isF1: !prevState.isF1, isF2: !prevState.isF2
      }));
    } else if (formBtn === 'F2') {
      this.setState( (prevState) => ({
        isF2: !prevState.isF2, isF3: !prevState.isF3
      }));
    } else if (formBtn === 'F3') {
      this.setState( (prevState) => ({
        isF3: !prevState.isF3, isConfirmation: !prevState.isConfirmation
      }));
    }
  }

  handleConfirmation(e) {
    // TODO: send to home page
    this.setState({ whichForm: 'index' });
  }

  render() {

    if (this.state.isIndex === true) {
      return (
        <Form checkout={this.handleCheckout.bind(this)} />
      );
    } else if (this.state.isF1 === true) {
      return (
        <F1
          handleChange={this.handleChange.bind(this)}
          handleNext={this.handleNext.bind(this)}
        />
      );
    } else if (this.state.isF2 === true) {
      return (
        <F2
          handleChange={this.handleChange.bind(this)}
          handleNext={this.handleNext.bind(this)}
        />
      );
    } else if (this.state.isF3 === true) {
      return (
        <F3
          handleChange={this.handleChange.bind(this)}
          handleNext={this.handleNext.bind(this)}
        />
      );
    } else if (this.state.isConfirmation === true) {
      return (
        <Confirmation handleConfirmation={this.handleConfirmation.bind(this)} />
      );
    }
  }

}

ReactDOM.render(
  <Checkout />,
  document.getElementById('app')
);