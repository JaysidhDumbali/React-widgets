import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("game");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchResult = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeoutID = setTimeout(() => {
      searchResult();
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <React.Fragment key={result.pageid}>
        <div className="item">
          <div className="content">
            <div className="header">{results.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            value={term}
            name="first-name"
            placeholder="First Name"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
