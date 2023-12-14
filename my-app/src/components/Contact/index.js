// ContactForm.js
import React, { Component } from 'react';
import { FaFacebook ,FaInstagram, FaGithub  } from "react-icons/fa";
import './index.css'

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    this.setState({submitted:true})
    console.log('Form submitted:', this.state);
  };

  render() {
    const {submitted,name} = this.state
    console.log("iwdnc",submitted)
    return(
      
      <div className='outermostContactContainer'>
        <div className='FirstHalf'>
          <h1>Contact Me</h1>
          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          Message:
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
        {submitted && <h1>Thank You {name}</h1>}
      </form>
        </div>

        <div className='SecondHalf'>
          <div>
            <h1>Email Me:</h1>
            <p>edupugantisrihas262003@gmail.com</p>
          </div>
          <div>
            <h1>Phone No:</h1>
            <p>9553783456</p>
          </div>
          <div>
            <h1>Social Media Details:</h1>
            <div>
              <a href="https://www.instagram.com/srihas007/" target='_blank' className='marginright'>
              <FaInstagram  size="30" color="pink"/>
              </a>
              <a href="https://www.facebook.com/edupuganti.srihas" target='_blank' className='marginright'>
              <FaFacebook size="30" />
              </a>
              <a href="">
              <FaGithub   size="30" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact