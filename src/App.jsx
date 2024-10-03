import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({});
  const handleChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [id]: value });
  };

  
  const [student, setStudent] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      stname: input.studentName,
      stAge: input.Age,
      stClass: input.Class,
    };

    setStudent([...student, newStudent]);
    setInput({})
handleClose()
  };


  return (
    <div className="font-monospace vh-100 w-100 justify-content-center align-content-center">
      <Container className="bg-white pb-2   shadow w-auto h-auto rounded-3 text-center">
        <h1 className="mt-3 ">Student List</h1>
        <Button className="mt-3" onClick={handleShow} variant="success">
          Add Student
        </Button>
        <h2 className="mt-3 mb-3">List of Added Students</h2>
        {student.map((item, index) => (
          <p key={index} className="mt-3 mb-3">
            Name :{item.stname}, 
             Age :{item.stAge},
             Class :{item.stClass}
          </p>
        ))}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center justify-content-center color-danger">
            <h1>Add Student</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubmit}>
            <Form.Label>Name </Form.Label>
            <Form.Control
            required
              type="text"
              placeholder="Name"

              name="studentName"
              value={input.studentName}
              onChange={handleChange}
            />
            <Form.Label>age </Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              required
              name="Age"
              value={input.age}
              onChange={handleChange}
            />
            <Form.Label>Class </Form.Label>
            <Form.Control
              type="text"
              placeholder="Class"
              requiredp
              name="Class"
              value={input.Class}
              onChange={handleChange}
            />
            <Button type="submit" variant="success" > 
              Add Student
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
