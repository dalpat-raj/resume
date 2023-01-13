import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "./Editor";
import Pre from "./Pre";

const MainEditor = () => {
  const params = useParams();
  const { id } = params;

  const [stateData, setStateData] = useState([]);
  const getData = (data) => setStateData(data);

 

  return (
    <div className="main__editor row">
      <div className="col-1">
        <Editor getData={getData} />
      </div>
      <div className="col-2">
        <Pre data={stateData} template_Id={id} />
      </div>
    </div>
  );
};

export default MainEditor;
