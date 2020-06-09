import React, {useState} from "react";
import {store} from "../../store.js";
import {sideBarContents} from "./sideBarContents.js";
import {SideBarTab} from "./sideBarTab.js";
import {Link} from "react-router-dom";
import Image from "../../img/peshkov.png";

const mobileSize = 800;

function SideBar(props) {
  const [exp, expand] = useState(window.innerWidth < mobileSize ? false : true);
  console.log("active tab is", props.activeTab);
  let list = sideBarContents.map(el => (
    <Link
      to={"/" + el.link}
      style={{textDecoration: "none", width: "100%", height: "100%"}}
    >
      {" "}
      <SideBarTab
        el={Object.assign(
          {},
          el,
          props.activeTab == el.label ? {active: true} : {active: false},
          {hided: !exp}
        )}
      />
    </Link>
  ));
  window.addEventListener("resize", () => {
    if (window.innerWidth < mobileSize) expand(false);
    else expand(true);
  });
  return (
    <div className={exp ? "sidebar-wrapper big" : "sidebar-wrapper small"}>

      <div className="profilePicture">
        <img src={Image} alt="" className="avatar" />
      </div>
      <br />
      <nav className="nav-links"> {list} </nav>
    </div>
  );
}
export {SideBar};
