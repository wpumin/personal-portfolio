import React, { useEffect, useState } from "react";
import Pages from "./pages";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/wpumin")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) {
    return <div />;
  }

  return <Pages data={data} />;
};

export default App;
