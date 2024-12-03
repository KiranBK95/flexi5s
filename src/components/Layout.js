
  
// import React from "react";
// import flexilogo from "../assets/flexilogo.png";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <header className="bg-blue-600 text-white">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           {/* Company Logo */}
//           <div className="flex items-center">
//             <img
//               src={flexilogo}
//               alt="Company Logo"
//               className="w-10 h-10 mr-2"
              
//             />
//             <span className="text-lg font-bold">5S Audit</span>
//           </div>
//           {/* Placeholder for Logout or User Info */}
//           <div>
//             <button className="bg-white text-blue-600 px-4 py-2 rounded shadow">
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>
//       <main className="flex-grow container mx-auto p-4">{children}</main>
//       <footer className="bg-blue-600 text-white p-2 text-center">
//         © 2024 Fleximake Pty Ltd.
//       </footer>
//     </div>
//   );
// };

// export default Layout;


// import React from "react";
// import flexilogo from "../assets/flexilogo.png";
// import { useAuth0 } from "@auth0/auth0-react";

// const Layout = ({ children }) => {
//   const { logout } = useAuth0();

//   const handleLogout = () => {
//     logout({
//       returnTo: window.location.origin + "/signin", // Redirect to the signin page after logout
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <header className="bg-blue-600 text-white">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           {/* Company Logo */}
//           <div className="flex items-center">
//             <img
//               src={flexilogo}
//               alt="Company Logo"
//               className="w-10 h-10 mr-2"
//             />
//             <span className="text-lg font-bold">5S Audit</span>
//           </div>
//           {/* Logout Button */}
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700 hover:text-white transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>
//       <main className="flex-grow container mx-auto p-4">{children}</main>
//       <footer className="bg-blue-600 text-white p-2 text-center">
//         © 2024 Fleximake Pty Ltd.
//       </footer>
//     </div>
//   );
// };

// export default Layout;


// import React from "react";
// import { Outlet } from "react-router-dom"; // Import Outlet to render child components
// import flexilogo from "../assets/flexilogo.png";
// import { useAuth0 } from "@auth0/auth0-react";

// const Layout = () => {
//   const { logout } = useAuth0();

//   const handleLogout = () => {
//     logout({
//       returnTo: window.location.origin + "/signin", // Redirect to the signin page after logout
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <header className="bg-blue-800 text-white">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           {/* Company Logo */}
//           <div className="flex items-center">
//             <img
//               src={flexilogo}
//               alt="Company Logo"
//               className="w-10 h-10 mr-2"
//             />
//             <span className="text-lg font-bold">5S Audit</span>
//           </div>
//           {/* Logout Button */}
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-red-200 hover:text-white transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>
//       <main className="flex-grow container mx-auto p-4">
//         <Outlet /> {/* Render the child routes here */}
//       </main>
//       <footer className="bg-blue-800 text-white p-2 text-center">
//         © 2024 Fleximake Pty Ltd.
//       </footer>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import { Outlet } from "react-router-dom";
import flexilogo from "../assets/flexilogo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: `${window.location.origin}/signin`, // Ensure the user is redirected to the signin page
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Company Logo */}
          <div className="flex items-center">
            <img
              src={flexilogo}
              alt="Company Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-lg font-bold">5S Audit</span>
          </div>
          {/* Logout Button */}
          <div>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> {/* Render the child routes here */}
      </main>
      <footer className="bg-blue-600 text-white p-2 text-center">
        © 2024 Fleximake Pty Ltd.
      </footer>
    </div>
  );
};

export default Layout;



// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import flexilogo from "../assets/flexilogo.png";
// import { Link, useNavigate } from "react-router-dom";

// const navigation = [
//   { name: "Dashboard", href: "/dashboard", current: true },
//   { name: "Audit Form", href: "/audit-form", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Layout = ({ children }) => {
//   const { logout, user } = useAuth0();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout({ logoutParams: { returnTo: window.location.origin + "/signin" } });
//   };

//   return (
//     <div className="min-h-full">
//       <Disclosure as="nav" className="bg-blue-900">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//               <div className="flex h-16 items-center justify-between">
//                 {/* Logo and Navigation */}
//                 <div className="flex items-center">
//                   <div className="shrink-0">
//                     <img
//                       src={flexilogo}
//                       alt="Company Logo"
//                       className="h-8 w-12"
//                     />
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-10 flex items-baseline space-x-4">
//                       {navigation.map((item) => (
//                         <Link
//                           key={item.name}
//                           to={item.href}
//                           className={classNames(
//                             item.current
//                               ? "bg-gray-900 text-white"
//                               : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                             "rounded-md px-3 py-2 text-sm font-medium"
//                           )}
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* User Info and Notifications */}
//                 <div className="hidden md:block">
//                   <div className="ml-4 flex items-center md:ml-6">
//                     <button
//                       type="button"
//                       className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>

//                     {/* Profile Dropdown */}
//                     <Menu as="div" className="relative ml-3">
//                       <div>
//                         <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                           <span className="sr-only">Open user menu</span>
//                           <img
//                             className="h-8 w-8 rounded-full"
//                             src={user?.picture}
//                             alt=""
//                           />
//                         </Menu.Button>
//                       </div>
//                       <Transition
//                         as={React.Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           <Menu.Item>
//                             {({ active }) => (
//                               <button
//                                 onClick={handleLogout}
//                                 className={classNames(
//                                   active ? "bg-gray-100" : "",
//                                   "block w-full px-4 py-2 text-left text-sm text-gray-700"
//                                 )}
//                               >
//                                 Sign out
//                               </button>
//                             )}
//                           </Menu.Item>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </div>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="-mr-2 flex md:hidden">
//                   <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className="md:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                 {navigation.map((item) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "block rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>

//       <header className="bg-white shadow">
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//             Dashboard
//           </h1>
//         </div>
//       </header>
//       <main>
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//           {children}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Layout;


