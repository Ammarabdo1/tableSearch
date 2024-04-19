import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Table1 = () => {
  const [MultiplyData, setMultiplyData] = useState([]);

  const [search, setSearch] = useState("");

  const MembersData = async () => {
    try {
      const res = await axios.get("JS/Data.json");
      setMultiplyData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    MembersData();
  }, []);

  return (
    <>
      <h1>Contact Keeper</h1>
      <Form className="form">

        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="text" placeholder="Search contact" onChange={(event)=>setSearch(event.target.value)} />

        </Form.Group>

      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {MultiplyData.filter((item)=>{
            return item.first_name.toLowerCase().includes(search.toLowerCase())
          }).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </>
  );
};

export default Table1;
