import React from "react";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import ApiExample from "./components/Api";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="space-y-6">
          <div className="flex justify-end">
            <ThemeSwitcher />
          </div>
          <TaskManager />
          <ApiExample />
        </div>
      </Layout>
    </ThemeProvider>
  );
}