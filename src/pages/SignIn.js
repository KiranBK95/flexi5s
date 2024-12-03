



// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SignIn = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     // Simulate authentication
//     setIsAuthenticated(true);
//     // Navigate to the dashboard (LandingPage)
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       <button
//         onClick={handleSignIn}
//         className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default SignIn;


// *** Before this line-WOrking Without Authentication***

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const SignIn = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

//   useEffect(() => {
//     if (isAuthenticated) {
//       // If authenticated, update state and redirect to dashboard
//       setIsAuthenticated(true);
//       navigate("/"); // Redirect to LandingPage (dashboard)
//     }
//   }, [isAuthenticated, setIsAuthenticated, navigate]);

// //   loginWithRedirect({
// //     redirect_uri: window.location.origin + "/dashboard",
// //   });
  

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       {!isAuthenticated ? (
//         <button
//           onClick={() => loginWithRedirect()}
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Sign in with Google
//         </button>
//       ) : (
//         <div>
//           <h2>Welcome, {user?.name}</h2>
//           <button
//             onClick={() => logout({ returnTo: window.location.origin })}
//             className="bg-red-600 text-white px-6 py-3 rounded-md shadow hover:bg-red-700 transition"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const SignIn = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

//   useEffect(() => {
//     if (isAuthenticated) {
//       // If authenticated, update state and redirect to the dashboard
//       setIsAuthenticated(true);
//       navigate("/dashboard"); // Redirect to the LandingPage (dashboard)
//     }
//   }, [isAuthenticated, setIsAuthenticated, navigate]);

//   const handleLogin = () => {
//     loginWithRedirect({
//       redirect_uri: window.location.origin + "/dashboard", // Redirect to Dashboard after login
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         {/* <h1 className="text-4xl font-bold text-blue-600">Sign In</h1> */}
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       {!isAuthenticated ? (
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Sign in with Google
//         </button>
//       ) : (
//         <div>
//           <h2>Welcome, {user?.name}</h2>
//           <button
//             onClick={() => logout({ returnTo: window.location.origin })}
//             className="bg-red-600 text-white px-6 py-3 rounded-md shadow hover:bg-red-700 transition"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const SignIn = ({ setIsAuthenticated }) => {
//   const navigate = useNavigate();
//   const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

//   useEffect(() => {
//     console.log("Auth state:", isAuthenticated); // Debugging
//     if (isAuthenticated) {
//       console.log("User authenticated. Redirecting to dashboard."); // Debugging
//       setIsAuthenticated(true);
//       navigate("/dashboard"); // Redirect to Dashboard
//     }
//   }, [isAuthenticated, setIsAuthenticated, navigate]);

//   const handleLogin = () => {
//     console.log("Initiating login process."); // Debugging
//     loginWithRedirect({
//       redirect_uri: window.location.origin + "/dashboard",
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       {!isAuthenticated ? (
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Sign in with Google
//         </button>
//       ) : (
//         <div>
//           <h2>Welcome, {user?.name}</h2>
//           <button
//             onClick={() => logout({ returnTo: window.location.origin })}
//             className="bg-red-600 text-white px-6 py-3 rounded-md shadow hover:bg-red-700 transition"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const SignIn = ({ setIsAuthenticated }) => {
//   const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoading) {
//       console.log("Auth0 is still loading...");
//       return; // Don't proceed until loading is complete
//     }

//     console.log("Auth state:", isAuthenticated);
//     if (isAuthenticated) {
//       console.log("User authenticated. Redirecting to dashboard.");
//       setIsAuthenticated(true);
//       navigate("/dashboard");
//     }
//   }, [isLoading, isAuthenticated, navigate, setIsAuthenticated]);

//   const handleLogin = () => {
//     loginWithRedirect({
//       redirect_uri: window.location.origin + "/dashboard",
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       {!isAuthenticated ? (
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Sign in with Google
//         </button>
//       ) : (
//         <div>
//           <h2>Welcome, {user?.name}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const SignIn = () => {
//   const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
//   const navigate = useNavigate();

//   // Effect to handle redirection after login
//   useEffect(() => {
//     if (isLoading) {
//       console.log("Auth0 is still loading...");
//       return; // Wait until loading is complete
//     }

//     console.log("Auth state:", isAuthenticated);

//     if (isAuthenticated) {
//       console.log("User authenticated. Redirecting to dashboard...");
//       navigate("/"); // Redirect to the root route (LandingPage within Layout)
//     }
//   }, [isLoading, isAuthenticated, navigate]);

//   // Trigger login when user clicks the button
//   const handleLogin = () => {
//     loginWithRedirect({
//       redirect_uri: window.location.origin, // Match the root route
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       {!isAuthenticated ? (
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Sign in with Google
//         </button>
//       ) : (
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold">Welcome, {user?.name}</h2>
//           <p className="text-gray-600 mt-2">Redirecting you to the dashboard...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const SignIn = () => {
//   const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoading) {
//       console.log("Auth0 is still loading...");
//       return; // Wait until loading is complete
//     }

//     console.log("Auth state:", isAuthenticated);

//     if (isAuthenticated) {
//       console.log("User authenticated. Redirecting to dashboard.");
//       navigate("/dashboard"); // Redirect to the root (LandingPage within Layout)
//     }
//   }, [isLoading, isAuthenticated, navigate]);

//   // Trigger login when user clicks the button
//   const handleLogin = () => {
//     loginWithRedirect({
//       redirect_uri: window.location.origin+"/dashboard", // Use the root URI as the redirect URI
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
//         <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
//       </header>
//       {!isAuthenticated ? (
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//         >
//           Sign in with Google
//         </button>
//       ) : (
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold">Welcome, {user?.name}</h2>
//           <p className="text-gray-600 mt-2">Redirecting you to the dashboard...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return; // Wait until Auth0 is done loading

    if (isAuthenticated) {
      // If already logged in, navigate to the dashboard
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogin = () => {
    loginWithRedirect({
      redirect_uri: window.location.origin+'/dashboard', // Redirect back to the app's root
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Sign In</h1>
        <p className="text-lg text-gray-600 mt-2">Access your 5S Audit dashboard.</p>
      </header>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;



