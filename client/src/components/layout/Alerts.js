import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alerts() {
  const alertcontext = useContext(AlertContext);

  return (
    alertcontext.alerts.length > 0 &&
    alertcontext.alerts.map((alert) => (
      <div className={`alert alert-${alert.type}`} key={alert.id}>
        {alert.msg}
      </div>
    ))
  );
}

export default Alerts;
