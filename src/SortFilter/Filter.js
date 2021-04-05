const Filter = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "orange",
        height: "100vh",
        minWidth: "100vw",
        zIndex: "1"
      }}
    >
      <button onClick={() => props.setOpen(null)}>Close</button>
    </div>
  );
};

export default Filter;
