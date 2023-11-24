import Resource from "./Resource";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";


const Pet = ({pet}) => {
  const [showForm, setShowForm] = useState(false);
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
  const webURL = "https://api.the"+pet+"api.com/v1/images/search?has_breeds=1&api_key=live_RdRbFkKgDV9ACmYOGVa5TGfbLOwn8XcaBiIpGsFeaFGJxDjLwvev3uu5YJVmRpvG";
  console.log(webURL);
  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return data.trans.map((dog) => (
      <>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={dog.url} height='286px' width='286px'/>
          <Card.Header as="h5">{dog.breeds[0].name}</Card.Header>
          <Card.Body>
            <Card.Title>Temperament:</Card.Title>
            <Card.Text>
              {dog.breeds[0].temperament}
            </Card.Text>
            <Button className='ps-5 pe-5 mt-2 primarycolor' variant="outline-success" onClick={handleShowForm}>Adopt Me!</Button>
          </Card.Body>
        </Card>
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
              <Modal.Title>Thank you for choosing me!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={dog.url} height='286px' width='286px'/>
            <Card.Header as="h5">{dog.breeds[0].name}</Card.Header>
            <Card.Body>
              <Card.Title>Temperament:</Card.Title>
              <Card.Text>
                {dog.breeds[0].temperament}
              </Card.Text>
            </Card.Body>
          </Card>
            <Form>
              <Form.Label htmlFor="inputPassword5"><i class="fas fa-user fa-lg me-3 fa-fw"></i>Your Name</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
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
      </>
      
    ));
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
    </div>
  );
};

export default Pet;