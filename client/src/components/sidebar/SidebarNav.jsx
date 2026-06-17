import React, { useState } from "react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSubItem,
  useSidebar,
} from "../ui/sidebar";
import { BookOpen, ClipboardList, Home, User, Users } from "lucide-react";

const MENU_ITEMS = [
  // { id: "dashboard", label: "Dashboard", icon: Home, isActive: true },
  { id: "students", label: "Students", icon: User },
  { id: "teachers", label: "Teachers", icon: Users },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "enrollments", label: "Enrollments", icon: ClipboardList },
];

const SidebarNav = ({ activeTab, setActiveTab }) => {
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <SidebarGroup className="px-3">
      <SidebarMenu className="gap-2">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <SidebarMenuSubItem key={item.id}>
              <SidebarMenuButton
                isActive={isActive}
                asChild
                className={`w-full items-center rounded-lg font-medium text-sm transition-colors gap-3 px-3 py-3 flex cursor-pointer ${isActive ? "bg-orange-50 text-orange-600 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                  if (isMobile) {
                    setOpenMobile(false);
                  }
                }}
              >
                <a
                  href={`#${item.id}`}
                  className="flex items-center w-full gap-3"
                >
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"}`}
                  />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuSubItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarNav;
