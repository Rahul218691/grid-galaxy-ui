
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Sidebar = ({ collapsed, toggleCollapse }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <>
      {/* Mobile toggle button that's always visible */}
      <button 
        onClick={toggleCollapse}
        className={cn(
          "fixed z-20 top-4 left-4 p-2 rounded-full bg-sidebar border border-sidebar-border md:hidden",
          collapsed ? "left-4" : "left-64"
        )}
      >
        {collapsed ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        )}
      </button>

      <aside className={cn(
        "fixed md:static z-10 bg-sidebar h-screen transition-all duration-300 border-r border-border flex flex-col",
        collapsed ? "w-16 md:w-16 overflow-hidden" : "w-64"
      )}>
        <div className={cn(
          "flex items-center p-4 border-b border-border",
          collapsed ? "justify-center" : "justify-start"
        )}>
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-semibold">L</span>
          </div>
          {!collapsed && (
            <span className="ml-3 font-semibold text-lg">Trucking App</span>
          )}
        </div>
        
        <nav className="flex-1 mt-4">
          <ul className="space-y-1 px-2">
            <li>
              <Link 
                to="/" 
                className={cn(
                  "flex items-center py-3 px-3 rounded-md transition-colors",
                  isActive('/') 
                    ? "bg-sidebar-primary text-white" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list">
                  <line x1="8" x2="21" y1="6" y2="6"/>
                  <line x1="8" x2="21" y1="12" y2="12"/>
                  <line x1="8" x2="21" y1="18" y2="18"/>
                  <line x1="3" x2="3" y1="6" y2="6"/>
                  <line x1="3" x2="3" y1="12" y2="12"/>
                  <line x1="3" x2="3" y1="18" y2="18"/>
                </svg>
                {!collapsed && <span className="ml-3">List Of Quotations</span>}
              </Link>
            </li>
            <li>
              <Link 
                to="/truckers" 
                className={cn(
                  "flex items-center py-3 px-3 rounded-md transition-colors",
                  isActive('/truckers') 
                    ? "bg-sidebar-primary text-white" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                {!collapsed && <span className="ml-3">Trucker List</span>}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Desktop toggle button - only visible on desktop */}
        <div className="p-4 border-t border-border hidden md:flex justify-center">
          <button 
            onClick={toggleCollapse} 
            className="p-2 rounded-full hover:bg-sidebar-accent transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
