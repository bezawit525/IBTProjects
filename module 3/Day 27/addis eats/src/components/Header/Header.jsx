const Header = (props) => {
  console.log("props", props);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Header;
