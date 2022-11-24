import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="flex row gap-2 shadow p-4 dark:bg-[#333] text" >
        <NavLink
          className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
          to="dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}
          to="counter"
        >
          Counter
        </NavLink>
      </nav>
      <main className="p-2">
      <Outlet />

      </main>
    </>
  );
}

export default App;
