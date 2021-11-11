import React, { useState } from "react";
import Image from "next/image";
import LeftSidebarIcons from "./left_sidebar_icons";

//import icons
import Logo from "../../public/images/Logo.svg";
import Home from "../../public/images/Home.svg";
import Discount from "../../public/images/Discount.svg";
import Dashboard from "../../public/images/Dashboard.svg";
import Message from "../../public/images/Message.svg";
import Notification from "../../public/images/Notification.svg";
import Setting from "../../public/images/Setting.svg";
import Logout from "../../public/images/Logout.svg";

//Style
import style from "../../styles/commonComponents.module.css";

export default function leftSidebar() {
  return (
    <div className={style.left_sidebar_parent}>
      <br></br>
      <div className="d-flex justify-content-center">
        <Image src={Logo} width={70} height={70} />
      </div>

      <div className={style.left_sidebar_child}>
        <LeftSidebarIcons>
          <Image src={Home} width={16} height={16} />
        </LeftSidebarIcons>

        <LeftSidebarIcons>
          <Image src={Discount} width={16} height={16} />
        </LeftSidebarIcons>

        <LeftSidebarIcons>
          <Image src={Dashboard} width={16} height={16} />
        </LeftSidebarIcons>

        <LeftSidebarIcons>
          <Image src={Message} width={16} height={16} />
        </LeftSidebarIcons>

        <LeftSidebarIcons>
          <Image src={Notification} width={16} height={16} />
        </LeftSidebarIcons>

        <LeftSidebarIcons>
          <Image src={Setting} width={16} height={16} />
        </LeftSidebarIcons>

        <div
          style={{
            padding: "10px",
            height: "50px",
            width: "60px",
            borderRadius: "10px",
            backgroundColor: "#1f1d2b",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
          }}
          className={` d-flex align-items-center justify-content-center`}
        >
          <Image src={Logout} width={16} height={16} />
        </div>
      </div>
    </div>
  );
}
