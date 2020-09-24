import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";

const items = [
  {
    title: "Tag 1",
    content: " This is the first tag",
  },
  {
    title: "Tag 2",
    content: " This is the second tag",
  },
  {
    title: "Tag 3",
    content: " This is the third tag",
  },
];

const options = [
  {
    label: "red",
    value: "red",
  },
  {
    label: "green",
    value: "green",
  },
  {
    label: "blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Accordion items={items} />
      <Search />
      <Dropdown
        label="select a color"
        selected={selected}
        setSelected={setSelected}
        options={options}
      />
      <Translate />
    </div>
  );
};

export default App;
