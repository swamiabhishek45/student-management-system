import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";
import SidebarNav from "./SidebarNav";

const SidebarMain = () => {
  return (
    <Sidebar>
      {/* header  */}
      <SidebarHeader>
        <SidebarNav/>
      </SidebarHeader>

      {/* Content  */}
      <SidebarContent></SidebarContent>

      {/* footer  */}
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default SidebarMain;
