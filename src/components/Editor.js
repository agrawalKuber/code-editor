import React, { useState } from "react";
import { IconButton } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ language, displayName, value, onChange }) => {
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <>
      <div className={`editor ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <IconButton
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            aria-label="delete"
          >
            <OpenInFullIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-editor"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
};

export default Editor;
