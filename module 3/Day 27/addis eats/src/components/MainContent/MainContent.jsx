import Card from "../Card/Card.jsx";

const MainContent = () => {
  const products = [
    {
      id: 1,
      name: "iphone",
      price: 1000,
      description: "great phone",
      ispaid: false,
    },
    {
      id: 2,
      name: "samsung",
      price: 1000,
      description: "great phone",
      ispaid: true,
    },
    {
      id: 3,
      name: "itel",
      price: 1000,
      description: "great phone",
      ispaid: false,
    },
  ];

  return (
    <div>
      <h1>Featured products</h1>

      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          ispaid={product.ispaid}
        />
      ))}
    </div>
  );
};

export default MainContent;
