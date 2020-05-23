import React, {useState} from "react";
import {store} from "../../store.js";
import {sideBarContents} from "./sideBarContents.js";
import {SideBarTab} from "./sideBarTab.js";

function SideBar(props) {
  const [exp, expand] = useState(true);
  console.log("active tab is", props.activeTab);
  let list;
  if (exp)
    list = sideBarContents.map(el =>
      props.activeTab == el.label ? (
        <SideBarTab el={Object.assign({}, el, {active: true, hided: false})} />
      ) : (
        <SideBarTab el={Object.assign({}, el, {active: false, hided: false})} />
      )
    );
  else
    list = sideBarContents.map(el =>
      props.activeTab == el.label ? (
        <SideBarTab el={Object.assign({}, el, {active: true, hided: true})} />
      ) : (
        <SideBarTab el={Object.assign({}, el, {active: false, hided: true})} />
      )
    );

  let handleClick = () => {
    expand(!exp);
  };
  return (
    <div className={exp ? "sidebar-wrapper big" : "sidebar-wrapper small"}>
      <div className="sb-exp-button" onClick={handleClick}>
        III{" "}
      </div>
      <div className="nav-links"> {list} </div>
    </div>
  );
}
export {SideBar};
