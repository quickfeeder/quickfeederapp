'use client';

import {
  Bell,
  CheckCircle,
  ChevronDown,
  Download,
  FileText,
  Filter,
  Folder,
  Globe,
  Image,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Moon,
  Plus,
  Search,
  Settings,
  Smartphone,
  Sun,
  TrendingUp,
  UserPlus,
  Users,
} from 'lucide-react';

import Head from 'next/head';
import React from 'react';
import { useState } from 'react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Quick Feeder | Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${darkMode ? 'dark' : 'light'} bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-200`}>
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 shadow-sm py-3 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-600 dark:text-gray-300">
              <Menu />
            </button>
            <div className="flex items-center">
              <MessageSquare className="text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="font-bold text-lg">Quick Feeder</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300" size={16} />
            </div>

            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 relative"
              >
                <Bell />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
              </button>
              {notifOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 py-2">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-start">
                        <MessageSquare className="text-indigo-600 dark:text-indigo-400 mr-3" />
                        <div>
                          <p className="text-sm">New feedback on Project X</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex items-start">
                        <UserPlus className="text-emerald-600 dark:text-emerald-400 mr-3" />
                        <div>
                          <p className="text-sm">John Doe joined your team</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-center">
                    <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                      View all
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-300 font-medium">JD</span>
                </div>
                <span className="hidden md:inline">John Doe</span>
                <ChevronDown className="hidden md:inline h-4 w-4" />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 py-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </a>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-1" />
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400">
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`sidebar bg-white dark:bg-gray-800 w-64 border-r border-gray-200 dark:border-gray-700 py-6 px-4 transform lg:translate-x-0 transition-transform duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <div className="relative md:hidden mb-6">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300" size={16} />
                </div>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium">
                  <span>Create New Project</span>
                  <Plus />
                </button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-200"
                    >
                      <LayoutDashboard className="mr-3" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Folder className="mr-3" />
                      <span>My Projects</span>
                      <span className="ml-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-0.5 rounded-full">
                        5
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Users className="mr-3" />
                      <span>Team</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings className="mr-3" />
                      <span>Settings</span>
                    </a>
                  </li>
                </ul>  
                {/* ...recent projects & pro plan omitted for brevity */}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Welcome back, John! Here's what's happening with your projects.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">
                  <Plus className="mr-2" />
                  New Project
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Active Projects */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Active Projects
                    </p>
                    <p className="text-2xl font-bold mt-1">5</p>
                  </div>
                  <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
                    <Folder />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-emerald-500 flex items-center">
                      <TrendingUp className="mr-1" /> 2.5%
                    </span>
                    <span className="ml-2">vs last month</span>
                  </div>
                </div>
              </div>

              {/* ...other cards follow same pattern */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
