import React, { useState } from "react";
import { connect } from "react-redux";
import LogoSvg from "./svg/LogoSvg";
import { sendOrderRequest } from "../actions/cartActions";
import { Link } from "react-router-dom";
const Checkout = ({ cartReducer: { items, loading }, sendOrderRequest }) => {
  const totalPrice_ =
    (items &&
      items.reduce(function(previous, current) {
        return previous + current.totalPrice;
      }, 0)) ||
    0;
  const totalItems =
    (items &&
      items.reduce(function(previous, current) {
        return previous + current.amount;
      }, 0)) ||
    0;
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    address_2: "",
    city: "",
    zip: "",
    totalItems,
    totalPrice_,
    items:
      items &&
      items.map(({ amount, name, _id }) => ({
        value: {
          qty: amount,
          productTitle: name,
          product: {
            _id: _id,
            link: "product",
            display: name
          }
        }
      }))
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const { name, email, address, address_2, city, zip } = values;
  const [errors, setErrors] = useState({});
  const Submit = e => {
    e.preventDefault();
    let valueState = false;
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const element = values[key];
        if (element) {
          valueState = true;
        } else {
          valueState = false;
          setErrors({ ...errors, [key]: values[key] });
        }
      }
    }
    valueState && sendOrderRequest(values);
  };
  items && console.log(items.length);
  return (
    <div
      className='flex-grow-1 w-100 p-5 d-flex justify-content-center align-items-stretch'
      style={{ fontSize: 15 }}
    >
      {items && items.length > 0 && (
        <div className='pt-5 pb-5  flex-grow-1 col-5 p-3 shadow-sm'>
          <div id='invoice-POS'>
            <center
              id='top'
              className='d-flex justify-content-center align-items-center'
            >
              <div className=''>
                <LogoSvg />
              </div>
              <div className='info'></div>
            </center>

            <div id='mid'>
              <div className='info'>
                <h2>Contact Info</h2>
                <p>
                  Address : street city, state 0000
                  <br />
                  Email : JohnDoe@gmail.com
                  <br />
                  Phone : 555-555-5555
                  <br />
                </p>
              </div>
            </div>

            <div id='bot'>
              <div id='table'>
                <table>
                  <thead>
                    <tr className='tabletitle'>
                      <td className='item'>
                        <h2>Item</h2>
                      </td>
                      <td className='Hours'>
                        <h2>Qty</h2>
                      </td>
                      <td className='Rate'>
                        <h2>Sub Total</h2>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {items &&
                      items.map(({ name, amount, totalPrice, _id }) => (
                        <tr className='service' key={_id}>
                          <td className='tableitem'>
                            <p className='itemtext'>{name}</p>
                          </td>
                          <td className='tableitem'>
                            <p className='itemtext'>{amount}</p>
                          </td>
                          <td className='tableitem'>
                            <p className='itemtext'>{totalPrice}</p>
                          </td>
                        </tr>
                      ))}

                    <tr className='tabletitle'>
                      <td></td>
                      <td className='Rate'>
                        <h2>tax</h2>
                      </td>
                      <td className='payment'>
                        <h2>0</h2>
                      </td>
                    </tr>

                    <tr className='tabletitle'>
                      <td></td>
                      <td className='Rate'>
                        <h2>Total</h2>
                      </td>
                      <td className='payment'>
                        <h2>{totalPrice_}</h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div id='legalcopy'>
                <p className='legal'>
                  <strong>Thank you for your business!</strong>  Payment is
                  expected within 31 days; please process this invoice within
                  that time. There will be a 5% interest charge per month on
                  late invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='p-5 flex-grow-1 p-3 shadow-sm ml-5'>
        {!loading ? (
          items ? (
            <form onSubmit={Submit}>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputName'>Name</label>
                  <input
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    type='text'
                    className='form-control'
                    id='inputName'
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputEmail4'>Email</label>
                  <input
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    type='email'
                    className='form-control'
                    id='inputEmail4'
                    placeholder='Email'
                    required
                  />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Address</label>
                <input
                  name='address'
                  value={address}
                  onChange={handleInputChange}
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  placeholder='1234 Main St'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress2'>Address 2</label>
                <input
                  name='address_2'
                  value={address_2}
                  onChange={handleInputChange}
                  type='text'
                  className='form-control'
                  id='inputAddress2'
                  placeholder='Apartment, studio, or floor'
                  required
                />
              </div>
              <div className='form-row'>
                <div className='form-group col-md-10'>
                  <label htmlFor='inputCity'>City</label>
                  <input
                    name='city'
                    value={city}
                    onChange={handleInputChange}
                    type='text'
                    className='form-control'
                    id='inputCity'
                    required
                  />
                </div>

                <div className='form-group col-md-2'>
                  <label htmlFor='inputZip'>Zip</label>
                  <input
                    name='zip'
                    value={zip}
                    onChange={handleInputChange}
                    type='text'
                    className='form-control'
                    id='inputZip'
                    required
                  />
                </div>
              </div>
              <button type='submit' className='btn buttonBgColor text-white'>
                {loading ? "-" : "buy"}
              </button>
            </form>
          ) : (
            <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-column'>
              <p>Congratulations! You’re now a part of our family.</p>
              <div className='lds-heart'>
                <div></div>
              </div>
              <Link to='/'> 'Home'</Link>
            </div>
          )
        ) : (
          <div className='flex-grow-1 h-100 d-flex justify-content-center align-items-center'>
            <div className='lds-roller'>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ cartReducer }) => ({ cartReducer });
export default connect(
  mapStateToProps,
  { sendOrderRequest }
)(Checkout);
