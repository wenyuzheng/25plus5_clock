const Setting = ({ label, length }) => {
  return (
    <div id="setting">
      <div>{label}</div>
      <div>
        <div id="decrement"></div>
        <div id="length">{length}</div>
        <div id="increment"></div>
      </div>
    </div>
  );
};

const Settings = () => {
  const breakLength = 5;
  const sessionLength = 25;

  return (
    <div>
      <Setting label="Break Length" length={breakLength} />
      <Setting label="Session Length" length={sessionLength} />
    </div>
  );
};

export default Settings;
