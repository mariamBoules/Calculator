import React from "react";

function App() {
  const [input, setinput] = React.useState("");
  const [result, setResult] = React.useState(null);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^-?\d*\.?\d*$/.test(newValue)) {
      setinput(newValue);
    }
  };

  const clickPlus = () => {
    if (result) {
      setResult(parseFloat(input) + parseFloat(result));
      setinput("");
    } else {
      setResult(input);
    }
  };
  const clickMinus = () => {
    if (result) {
      setResult(parseFloat(input) - parseFloat(result));
      setinput("");
    } else {
      setResult(input);
    }
  };

  const clickMultiply = () => {
    if (result) {
      setResult(parseFloat(input) * parseFloat(result));
      setinput("");
    } else {
      setResult(input);
    }
  };

  const clickdivide = () => {
    if (result) {
      if (result === 0) {
        alert("Math Error");
      } else {
        setResult(parseFloat(input) / parseFloat(result));
        setinput("");
      }
    } else {
      setResult(input);
    }
  };

  const resetInput = () => {
    setinput("");
  };

  const resetResult = () => {
    setResult(null);
  };

  const enter = () => {
    setResult(input);
    setinput("");
  };

  return (
    <div style={styles.container}>
      <h1>Simple Calculator</h1>
      <h3 style={{ color: "#2F4F4F" }}>{result?result:"0"}</h3>
      <input
        value={input ? input : ""}
        type="text"
        onChange={handleChange}
        style={{
          width: "200px",
          height: "30px",
          border: "1px solid black",
          backgroundColor: "#F0FFFF",
          borderRadius: "5px",
          color: "#2F4F4F",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      ></input>

      <button onClick={enter} style={styles.button}>
        Enter
      </button>
      <br></br>
      <br></br>
      <button onClick={clickPlus} style={styles.button}>
        +
      </button>
      <button onClick={clickMinus} style={styles.button}>
        -
      </button>
      <button onClick={clickMultiply} style={styles.button}>
        X
      </button>
      <button onClick={clickdivide} style={styles.button}>
        /
      </button>
      <br></br>
      <br></br>
      <button onClick={resetInput} style={styles.button2}>
        reset input
      </button>
      <button style={styles.button2} onClick={resetResult}>
        reset result
      </button>
    </div>
  );
}

let styles = {
  container: {
    flex: 1,
    margin: "10px",
  },
  button: {
    width: "100px",
    height: "30px",
    border: "1px solid black",
    backgroundColor: "#FFEBCD",
    margin: "5px",
    borderRadius: "5px",
  },
  button2: {
    width: "100px",
    height: "30px",
    border: "1px solid black",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: "#8FBC8F",
  },
};

export default App;
