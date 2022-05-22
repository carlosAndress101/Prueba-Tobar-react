const customer = ({ customs }) => {
  return (
    <div>
      <h2>Customer tabla</h2>
      {customs.map((c) => (
        <div key={c._id}>
          {" "}
          {c._id} {c.Name}
        </div>
      ))}
    </div>
  );
};

export default customer;
