import Resource from "./Resource";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const Dogs = () => {
  const webURL = "https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=live_xPOhd65gYc8omhaxUNKAfTDU9dakU9Xt6KrmURqT3aw65STlGv1ASm1tD4DVmNG3";

  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return data.trans.map((dog) => (
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={dog.url} height='286px' width='286px'/>
        <Card.Header as="h5">{dog.breeds[0].name}</Card.Header>
        <Card.Body>
          <Card.Title>Temperament:</Card.Title>
          <Card.Text>
            {dog.breeds[0].temperament}
          </Card.Text>
          <Button className='ps-5 pe-5 mt-2 primarycolor' variant="outline-success">Adopt Me!</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
    </div>
  );
};

export default Dogs;