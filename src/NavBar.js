import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from './images/pet-house.png';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function NavBar({showLogin}) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showDonateForm, setShowDonateForm] = useState(false);
  const handleDonateCloseForm = () => setShowDonateForm(false);
  const handleDonateShowForm = () => setShowDonateForm(true);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropDown = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  }
  const handleShowForm = () => {
    setShowForm(true);
  }
  const handleLogin = () => {
    navigate('./login');
  };
  return (
    <>
      <Navbar expand="lg" className="primarycolor">
        <Container fluid>
          <Navbar.Brand href="#"><img src={logo} alt='logo' height='50px' width='50px'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/funcat">Adopt a Cat</Nav.Link>
              <Nav.Link as={Link} to="/fundog">Adopt a Dog</Nav.Link>
              <NavDropdown title="Donate your pet" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={handleDonateShowForm}>Cat</NavDropdown.Item>
                <NavDropdown.Item onClick={handleDonateShowForm}>
                  Dog
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" disabled>
                  Others
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {() => {if (showLogin === false){
              console.log('show is false');
            }else{
              console.log('show is true');
            }}}
            {!showLogin && (
              <>
                <Button variant="outline-success" onClick={handleLogin}>Login</Button>
                <Button variant="outline-success" className='ms-3' onClick={handleShowForm}>Register</Button>
              </>
            )}
            {showLogin && (<Button variant="outline-danger">Logout</Button>)}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
            <Modal.Title>Fill in your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label htmlFor="inputPassword5"><i class="fas fa-user fa-lg me-3 fa-fw"></i>Your Name</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Label htmlFor="inputPassword5"><i class="fas fa-lock fa-lg me-3 fa-fw"></i>Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
            <Form.Label htmlFor="inputPassword5"><i class="fas fa-lock fa-lg me-3 fa-fw"></i>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
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

      <Modal show={showDonateForm} onHide={handleDonateCloseForm}>
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
          <Button variant="secondary" onClick={handleDonateCloseForm}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDonateCloseForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      
  );
}

export default NavBar;