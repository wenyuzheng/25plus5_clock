import "./css/Setting.css";

const Setting = ({ label, length, increment, decrement }) => {
  return (
    <div id="setting">
      <div>{label}</div>
      <div id="controlls">
        <div id="decrement" onClick={decrement}>
          -
        </div>
        <div id="length">{length}</div>
        <div id="increment" onClick={increment}>
          +
        </div>
      </div>
    </div>
  );
};

export default Setting;
