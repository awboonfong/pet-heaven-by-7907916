import Resource from "./Resource";

const MuncCat = ({breed}) => {
  const webURL = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breed;
  console.log(webURL);

  const render = (data) => {
    if (data.loading === true) return <p>loading ...</p>;

    console.log("Got the data", data);

    return data.trans.map((cat) => (
      <div key={cat.id}>
        <img className="card-img-top" position='top' src={cat.url} alt="cat img" height='322.66px' width='484px' />
      </div>
    ));
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
    </div>
  );
};

export default MuncCat;