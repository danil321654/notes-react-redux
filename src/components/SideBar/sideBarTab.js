import React from "react";
import "../../index.css";
import {store} from "../../store.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
  faInfo,
  faChartBar,
  faTasks,
  faUser,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faInfo, faChartBar, faTasks, faUser, faAddressBook);

function SideBarTab({el}) {
  console.log(el);
  const dispatchNewActiveTab = () =>
    store.dispatch({type: "CHANGE_ACTIVE", id: el.label});
  return (
    <div
      className={el.active ? "sidebar-tab active" : "sidebar-tab"}
      id={el.label}
      onClick={dispatchNewActiveTab}
    >
      <div className="nav-link">
        <div className="sidebar-icon">
          <FontAwesomeIcon icon={el.icon} />
        </div>
        {!el.hided ? <div className="sidebar-label">{el.label}</div> : ""}
      </div>
    </div>
  );
}
export {SideBarTab};
