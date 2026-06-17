import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "../ui/sidebar";
import SidebarNav from "./SidebarNav";
import SidebarLogo from "./SidebarLogo";

const SidebarMain = ({ activeTab, setActiveTab }) => {
  return (
    <Sidebar className="">
      {/* header  */}
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>

      {/* Content  */}
      <SidebarContent>
        <SidebarNav activeTab={activeTab} setActiveTab={setActiveTab} />

      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarMain;
