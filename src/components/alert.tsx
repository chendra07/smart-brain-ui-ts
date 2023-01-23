import React from "react";

type AlertType = {
  children: string;
};

function Danger({ children }: AlertType) {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
}

function Warning({ children }: AlertType) {
  return (
    <div className="alert alert-warning" role="alert">
      {children}
    </div>
  );
}

export default { Danger, Warning };
