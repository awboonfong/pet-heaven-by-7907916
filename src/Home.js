import React from "react";
import logo from './images/pet-house.png';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showForm, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

  const handleDropDown = (event) => {
    setSelectedOption(event.target.value);
  };

  const divStyle = {
    backgroundImage: 'url("/post-it.png")', // Replace with the actual path to your background image
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#fff', // Set the text color to contrast with the background
    width: '100%', // Set the width of the div
    height: '800px',
  };

  const handleAdoptClick = (pet) => {
    if (pet === 'cat'){
      navigate('./funcat');
    }
    else{
      navigate('./fundog');
    }
  };

  return(
    <div>
      <div class="px-4 py-5 my-5 text-center" style={divStyle}>
        <img class="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57"/>
        <h1 class="display-5 fw-bold text-body-emphasis">Welcome to Pet Heaven</h1>
        <div class="col-lg-6 mx-auto">
          <p class="mb-4" className="primarywordcolor fs-20">🐾 Where Love Finds a Home! 🏡 Explore the joy of adopting or supporting a furry friend in need. Whether you're ready to open your heart to a new companion or contribute to the well-being of our four-legged friends, you're in the right place. Browse our adorable dogs and cats awaiting loving homes, and discover ways to make a difference through donations. Join us in creating happy tails and lifelong bonds. Together, let's make every pet's story a tale of love and belonging. 🐶🐱 #AdoptLove #SupportCompanionship #MakeADifference 🐾</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button className='ps-5 pe-5 mt-2 primarycolor' variant="outline-success" onClick={handleShow}>Adopt</Button>
            <Button className='ps-5 pe-5 mt-2 primarycolor' variant="outline-success" onClick={handleShowForm}>Donate your pet!</Button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>What do you want to adopt?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button className='ps-3 pe-3 me-3' variant="outline-success" onClick={() => handleAdoptClick('cat')}>i want a Cat!</Button>
            <Button className='ps-3 pe-3' variant="outline-success"onClick={() => handleAdoptClick('dog')}>i want a Dog!</Button>
          </Modal.Body>
      </Modal>
      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Fill in your pet details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select className='mb-3' aria-label="Default select example">
              <option>Are you donating a dog or a cat?</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="others">Others</option>
            </Form.Select>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Breed</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Drop your pet photo here!</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please describe your pet</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="How do they behave around strangers, etc?"/>
            </Form.Group>
            <Form.Select aria-label="Default select example" onChange={handleDropDown}>
              <option>How do you want us to reach you</option>
              <option value="email">Email</option>
              <option value="whatsapp">Contact Number (Whatsapp only)</option>
              <option value="social-media">Social Media (Instagram only)</option>
            </Form.Select>
            {selectedOption === 'email' && (
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
            )}

            {selectedOption === 'whatsapp' && (
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+65</InputGroup.Text>
                <Form.Control
                  placeholder="Phone Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            )}

            {selectedOption === 'social-media' && (
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForm}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;