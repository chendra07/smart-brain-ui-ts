import React from "react";

type WarningType = {
  children: string;
};

function Alert({ children }: WarningType) {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
}

export default { Alert };
