import './App.css';
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  async function getData() {
    let result = await fetch('http://universities.hipolabs.com/search?country=India');
    result = await result.json();
    setData(result);
  }
  console.log(data);
  return (
    <div className="App">
      <div className="heading-div">
        <h1 className="heading">Select university from the below list</h1>
      </div>
      <table className="table table-striped .ml-3 col-sm-6 offset-sm-3" >
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Contry</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) =>
              <tr key={i}>
                <td>{i + 1}</td>
                <a href={item.web_pages[0]} target="_blank">{item.name}</a>
                <td>{item.country}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
export default App;