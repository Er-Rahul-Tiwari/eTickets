import React from "react";
import { useHistory } from "react-router-dom";
import TreeMenu from "react-simple-tree-menu";
import "react-simple-tree-menu/dist/main.css";
import logoBlue from "assets/img/logo-01.svg";

const Sidebar = ({ ...props }) => {
  let history = useHistory();
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src={logoBlue}
          className="sidebar__top--img"
          alt="Ticket Viral Logo"
        />
        <span className="sidebar__top--name">TV</span>
      </div>
      <div className="sidebar__bottom">
        <TreeMenu
          cacheSearch
          data={[
            {
              key: "/profile",
              label: "Profile",
              url: "/profile",
            },
            {
              key: "/events",
              label: "Events",
              url: "/events",
            },
            {
              key: "/tickets",
              label: "Ticket List",
              url: "/tickets",
            },
            {
              key: "/editTicket",
              label: "Edit Ticket",
              url: "/editTicket",
            },
            {
              key: "/profileSetting",
              label: "Profile Setting",
              url: "/profileSetting",
            },
            {
              key: "/createTicket",
              label: "Create Ticket",
              url: "/createTicket",
            },

            {
              key: "/viewEvent",
              label: "View Event(s)",
              url: "/viewEvent",
            },
            {
              key: "/viewTicket",
              label: "View Ticket(s)",
              url: "/viewTicket",
            },
            {
              key: "/sells",
              label: "Sells",
              url: "/Sells",
            },
            {
              key: "/Revenues",
              label: "Revenue",
              url: "/Revenues",
            },
          ]}
          debounceTime={125}
          disableKeyboard={false}
          hasSearch={false}
          activeKey={props.location.pathname}
          onClickItem={({ key, label, ...props }) => {
            if (props.url) history.push(props.url);
          }}
          resetOpenNodesOnDataUpdate={false}
        />
      </div>
      <div className="sidebar__footer">
        <span className="sidebar__footer__copyright">
          &copy; All copyrights reserved by D&Y IT Solutions
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
