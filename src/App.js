import './App.css';
import Sidenav from './component/sidenav/Sidenav'
import Topnav from './component/Topnav/Topnav'
import Heading from './component/bodyHeading/Heading'
import TableHeading from './component/tableHeading/TableHeading'
import Card from './component/contactCard/Card'
import axios from 'axios'
import React, { useEffect } from 'react'
import Input from './component/input/Input'
import Button from './component/button/Button'

function App() {
  const [dbUser, setdbUser] = React.useState("");
  const [stat, setStat] = React.useState(false);
  const [userInfo, setuserInfo] = React.useState("");
  const [v, setv] = React.useState("");
  const [ids, setids] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/userData").then((res) => {
      setdbUser(res.data)
    })
  }, [stat])
  const details = (id) => {
    setids(id)
    const formData = {
      id: ids
    }
    axios.post('http://localhost:5000/userData', formData)

      .then(function (response) {
        console.log("response");
      })
      .catch(function (error) {
        console.log("error");
      });
    const userInfo = dbUser && dbUser.filter((e) => {
      if (e._id === id) {
        setv(e)
        // console.log(e)
        return e
      }
    })

    setuserInfo(userInfo[0])

  }
  return (
    <div className="App">
      <div className='nav'>
        <Sidenav />
        <div style={{ width: "100%" }}>
          <Topnav />
          <Heading />
          <div className='search'>
            <Input />
            <Button setqq={setStat}  />
          </div>
          <div className='contact_info'>
            <div className='tableHeading'>
              <TableHeading info={dbUser} details={details} />
            </div>
            <div className='card'>
              {userInfo && <Card userCard={userInfo} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;