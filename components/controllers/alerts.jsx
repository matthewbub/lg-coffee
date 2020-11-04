import React from "react";

const Alert = (props) => {
  return (
    <div style={{ height: "100px", width: "300px" }} className="mt-2">
      {props ? (
        <div className={"alert alert-" + props.status.status} role="alert">
          {props.status.message}
        </div>
      ) : null}
    </div>
  );
};

export { Alert };
