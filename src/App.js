import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useRef, useEffect } from "react";
import "./App.css"

const App = () => {
  const [dtobdata,setdtobdata]=useState()
  const [dtoodata,setdtoodata]=useState()
  const [dtohdata,setdtohdata]=useState()
  const [da, setdat] = useState();
  const dtob = useRef();
  const dtoo = useRef();
  const dtoh = useRef();

  const submit = () => {
    let mydata=dtob.current.value
    let result=parseInt(mydata)
    let result2=result.toString(2)
    setdtobdata(result2)
  };
  const submit1 = () => {
    let mydata=dtoo.current.value
    let result=parseInt(mydata)
    let result2=result.toString(8)
    setdtoodata(result2)
  };
  const submit2 = () => {
    let mydata=dtoh.current.value
    let result=parseInt(mydata)
    let result2=result.toString(16)
    setdtohdata(result2)
  };
  useEffect(() => {
    const d = new Date().getFullYear();
    setdat(d);
  }, []);

  return (
    <>
      <div className="card text-center">
        <div className="card-header bg-success text-white">Computer Number System Calculation</div>
      </div>
      <div className="card text-center mt-3">
        <div className="card-header bg-info">Decimal To Binary Conversion</div>
        <div className="card-body">
          <div className="mt-4" style={{ textAlign: "center" }}>
            <input
              ref={dtob}
              type="number"
              placeholder="Enter Decimal Number"
            ></input>
          </div>
          <div className="text-center mt-3">
            <button onClick={submit} className="btn btn-success">
              Submit
            </button>
            <h5 className="card-title mt-4">{dtobdata}</h5>
          </div>
        </div>
      </div>
      <div className="card text-center mt-3">
        <div className="card-header bg-info">Decimal To Octal Conversion</div>
        <div className="card-body">
          <div className="mt-4" style={{ textAlign: "center" }}>
            <input
              ref={dtoo}
              type="number"
              placeholder="Enter Decimal Number"
            ></input>
          </div>
          <div className="text-center mt-3">
            <button onClick={submit1} className="btn btn-warning">
              Submit
            </button>
            <h5 className="card-title mt-4">{dtoodata}</h5>
          </div>
        </div>
      </div>
      <div className="card text-center mt-3">
        <div className="card-header bg-info">Decimal To Hexadecimal Conversion</div>
        <div className="card-body">
          <div className="mt-4" style={{ textAlign: "center" }}>
            <input
              ref={dtoh}
              type="number"
              placeholder="Enter Decimal Number"
            ></input>
          </div>
          <div className="text-center mt-3">
            <button onClick={submit2} className="btn btn-primary">
              Submit
            </button>
            <h5 className="card-title mt-4">{dtohdata}</h5>
          </div>
        </div>
      </div>
      <div className="card-footer text-center text-muted">© {da} Sumanta Das</div>
    </>
  );
};

export default App;
