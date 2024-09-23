import "../Home/Form1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Form = () => {
  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Order Form</h2>
        <div className="btn">
        <label className="radio-button">
            <input type="radio" name="plan" value="premium" />
            Premium
          </label>
          <label className="radio-button">
            <input type="radio" name="plan" value="normal" />
            Normal
          </label>
        </div>
        <label className="form-label" htmlFor="orderNumber">
          Order Number
        </label>
        <input
          type="number"
          className="form-input"
          id="orderNumber"
          placeholder="Enter order number"
        />
        <label className="form-label" htmlFor="licenseName">
          License Name
        </label>
        <input
          type="text"
          className="form-input"
          id="licenseName"
          placeholder="licenseName"
        />
        <label className="form-label" htmlFor="productBundle">
          Product Bundle
        </label>
        <input
          type="text"
          className="form-input"
          id="productBundle"
          placeholder="productBundle"
        />
        <button type="button" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </button>
      </div>
      <label className="form-label" htmlFor="productBundle">
          Concurrency Details
        </label>
      <div className="extra-info">
        <div className="info-item">
          <p>CONCURRENCY</p>
          <p>1</p>
        </div>
        <div className="info-item">
          <p>PRINT/COPY</p>
          <p>20</p>
        </div>
        <li>
          <a to="/">View/Edit concurrency per title</a>
        </li>
      </div>
    </>
  );
};

export default Form;
