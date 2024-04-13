function Counter({ handlePlus, handleMinus, handleClear }) {
  return (
    <div className="btn-group">
      <button className="btn btn-success" onClick={handlePlus}>
        Plus
      </button>
      <button className="btn btn-secondary" onClick={handleMinus}>
        Minus
      </button>
      <button className="btn btn-danger" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default Counter;
