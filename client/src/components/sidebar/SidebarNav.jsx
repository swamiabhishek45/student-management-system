import React from 'react'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuSubItem } from '../ui/sidebar'
import { BookOpen, ClipboardList, Home, User, Users } from 'lucide-react'



const MENU_ITEMS = [
    {id: "dashboard", label: "Dashboard", icon: Home, isActive: true},
    {id: "students", label: "Students", icon: User},
    {id: "teachers", label: "Teachers", icon: Users},
    {id: "courses", label: "Courses", icon: BookOpen},
    {id: "enrollments", label: "Enrollments", icon: ClipboardList}
]

const SidebarNav = () => {
  return (
    <SidebarGroup className="">
        <SidebarMenu className="">
            {
                MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                   return (<SidebarMenuSubItem key={item.id}>
                <SidebarMenuButton isActive={item.isActive} asChild className={`w-full`}>
                <a href={`#${item.id}`}>
                    <Icon className=''/>
                    <span>{item.label}</span>
                </a>

                </SidebarMenuButton>
            </SidebarMenuSubItem>

               ) })}
        </SidebarMenu>
    </SidebarGroup>
)
}

export default SidebarNav