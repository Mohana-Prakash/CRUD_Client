import React from 'react'
import './tableHeading.css'
import AddIcon from '@material-ui/icons/Add';
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from "@material-ui/core/Modal";
import CloseIcon from '@material-ui/icons/Close';

export default function TableHeading({ info, details, setqq }) {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
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
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const updateUserDetails = () => {

    }

    const tablee = info && info.map((a) => {
        const shortname = a.Name && a.Name
        const aa = shortname.indexOf(" ")
        const shortName1 = (shortname.slice(0, 1) + shortname.slice(aa + 1, aa + 2))
        const shortName2 = (shortname.slice(0, 1))

        const body = (
            <form className='form' onSubmit={updateUserDetails}>
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
                <input onChange={City } value={city} />
              </div>
              <div className='submit'>
                <button className='submit_btn' type='submit'>Submit</button>
              </div>
            </form>
        );

        return (
            <div key={a._id} onClick={() => details(a._id)}>
                <div className='user_info'>
                    <div className='checkBox'>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{ "aria-label": "secondary checkbox" }}
                            className='check_box'
                        />
                    </div>
                    <div className='info'>
                        <div className="user__shortname">
                            <p id="colorbtn" style={{ textTransform: "uppercase" }}>{aa === -1 ? shortName2 : shortName1}</p>
                        </div>
                        <div>
                            <h4>{a.Name}</h4>
                            <p>{a.Email}</p> 
                        </div>
                    </div>
                    {a.Company ?
                        <div className='comp_name'><h4>{a.Company}</h4></div> : null}
                    <div className='actions'>
                        <div>
                            <EditIcon onClick={handleOpen} className='edit_icon'></EditIcon>
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
                        <div><DeleteIcon className='delete_icon'></DeleteIcon></div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className='usertable'>
                <div className='checkBox'><AddIcon className='addIcon' /></div>
                <div className='info'><h4>Basic Info</h4></div>
                <div className='comp_name'><h4>Company</h4></div>
                <div className='actions'><h4>Action</h4></div>
            </div>
            <div>
                {tablee}
            </div>
        </div>
    )
}
