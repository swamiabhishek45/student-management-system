import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";
import SidebarNav from "./SidebarNav";
import SidebarLogo from "./SidebarLogo";
import SidebarUser from "./SidebarUser";

const SidebarMain = () => {
  return (
    <Sidebar className="">
      {/* header  */}
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>

      {/* Content  */}
      <SidebarContent>
        <SidebarNav/>

      </SidebarContent>
        
      {/* footer  */}
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarMain;
