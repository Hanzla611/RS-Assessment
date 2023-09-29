import React, { useState, useEffect } from "react";
import TopSection from "../components/TopSection";
import BottomSection from "../components/BottomSection";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Browse() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [userData, setUserData] = useState([]);
  const [drawerData, setDrawerData] = useState([]);
  const toggleDrawer = (userDetails) => {
    console.log(userDetails, "userDetails");
    setIsOpen((prevState) => !prevState);
    setDrawerData(userDetails);
  };
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);
  console.log(drawerData);
  return (
    <div className="bg-gray-200 h-screen w-full mx-auto p-4 px-6 overflow-x-auto sm:px-12 md:px-12">
      <TopSection />
      <div className="mt-2">
        <BottomSection toggleDrawer={toggleDrawer} userData={userData} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
        style={{ width: "300px", borderRadius: "25px 0 0 0" }}
      >
        <div className="drawer-parent container py-6 mr-8 text-sm">
          <div className="flex justify-between px-6">
            <span className="text-gray-500">User Details</span>
            <span className="text-violet-900 cursor-pointer" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </span>
          </div>

          <div className="flex justify-between mt-6 border-b-2 border-gray-200 px-6 pb-12">
            <img
              className="h-14 w-14 p border-2 border-gray-300 rounded-full"
              alt="pic"
              src={drawerData.image}
            />
            <div className="w-4/6">
              <span className="text-start text-violet-950">
                {drawerData.firstName + " " + drawerData.lastName}
              </span>
              <span className="text-gray-400 flex text-xs py-1">
                User Id: {drawerData.ein}
              </span>
              <span className="rounded-full bg-green-400 text-xs mt-3 text-white px-2 py-1 font-bold">
                Active
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-3 border-b-2 border-gray-200 px-6 pb-3">
            <div className="flex items-center pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="flex text-gray-700 text-sm ml-4">
                Basic & account details
              </span>
            </div>
            <div
              className="flex flex-col"
              style={{ padding: "25px 10px 10px 4px" }}
            >
              <span className="">
                {" "}
                {drawerData.firstName + " " + drawerData.lastName}
              </span>
              <span className="text-gray-400">Full name</span>
            </div>
            <div
              className="flex flex-col"
              style={{ padding: "25px 10px 20px 4px" }}
            >
              <span className=""> {drawerData.university}</span>
              <span className="text-gray-400">University</span>
            </div>
          </div>
          <div className="flex flex-col mt-3 px-6 pb-3">
            <div className="flex items-center pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <span className="flex text-gray-700 text-sm ml-4">User data</span>
            </div>
            <div
              className="flex flex-col"
              style={{ padding: "25px 10px 20px 4px" }}
            >
              <span className=" text-gray-950">
                {" "}
                {drawerData?.address?.address +
                  " " +
                  drawerData?.address?.city +
                  " " +
                  drawerData?.address?.postalCode +
                  " " +
                  drawerData?.address?.state}
              </span>
              <span className="text-gray-400">Address</span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Browse;
