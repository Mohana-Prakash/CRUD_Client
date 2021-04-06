import React from "react";
import Modal from "@material-ui/core/Modal";
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';
// import AddIcon from '@material-ui/icons/Add';

import './button.css'

export default function Button({ setqq }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [city, setCity] = React.useState("");
  const [designation, setDesignation] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Name = (e) => {
    setName(e.target.value)
  }
  const Email = (e) => {
    setMail(e.target.value)
  }
  const Phone = (e) => {
    setPhone(e.target.value)
  }
  const Company = (e) => {
    setCompany(e.target.value)
  }
  const City = (e) => {
    setCity(e.target.value)
  }
  const Designation = (e) => {
    setDesignation(e.target.value)
  }

  const UserDetails = (e) => {
    const formData = {
      Name: name,
      Email: mail,
      Phone: phone,
      Company: company,
      City: city,
      Designation: designation
    }
    axios.post('http://localhost:5000/userData', formData)

      .then(function (response) {
        console.log("response");
      })
      .catch(function (error) {
        console.log("error");
      });
    setqq(true)
    setOpen(false);

    e.preventDefault();

  }
  const body = (
    <form className='form' onSubmit={UserDetails}>
      <div className='close_modal'>
        <CloseIcon className='closeIcon' onClick={()=>{setOpen(false)}}></CloseIcon>
      </div>
      <div className='formHeading'>
        <h1>User Details</h1>
      </div>
      <div className='formDetail'>
        <h4>Full Name:</h4>
        <input onChange={Name} value={name} />
      </div>
      <div className='formDetail'>
        <h4>Designation:</h4>
        <input onChange={Designation} value={designation} />
      </div>
      <div className='formDetail'>
        <h4>Email:</h4>
        <input onChange={Email} value={mail} />
      </div>
      <div className='formDetail'>
        <h4>Phone:</h4>
        <input onChange={Phone} value={phone} />
      </div>
      <div className='formDetail'>
        <h4>Company:</h4>
        <input onChange={Company} value={company} />
      </div>
      <div className='formDetail'>
        <h4>City:</h4>
        <input onChange={City} value={city} />
      </div>
      <div className='submit'>
        <button className='submit_btn' type='submit'>Submit</button>
      </div>
    </form>
  );
  return (
    <div>
      <button className='addbtn' type="button" onClick={handleOpen}>
        Add Contact
      </button>
      <div className='modal'>
        <Modal
          className='formModal'
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  );
}
