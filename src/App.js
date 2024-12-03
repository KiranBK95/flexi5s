

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SignIn from "./pages/SignIn";
// import LandingPage from "./pages/LandingPage";
// import AuditForm from "./components/AuditForm";
// import Layout from "./components/Layout";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         {/* SignIn Page */}
//         <Route
//           path="/signin"
//           element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
//         />
//         {/* LandingPage (Dashboard) */}
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? <Layout><LandingPage /></Layout>  : <Navigate to="/signin" replace />
//           }
//         />
//         {/* AuditForm (with Layout) */}
//         <Route
//           path="/audit-form"
//           element={
//             isAuthenticated ? (
//               <Layout>
//                 <AuditForm />
//               </Layout>
//             ) : (
//               <Navigate to="/signin" replace />
//             )
//           }
//         />
//         {/* Default Route */}
//         <Route path="*" element={<Navigate to="/signin" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// *** Before this line-WOrking Without Authentication***

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
// import SignIn from "./pages/SignIn";
// import LandingPage from "./pages/LandingPage";
// import AuditForm from "./components/AuditForm";
// import Layout from "./components/Layout";

// // Replace these values with your Auth0 credentials
// const domain = "dev-fzf1ql1knabosj7z.us.auth0.com"; // Your Auth0 domain
// const clientId = "8i2XD7rJHdEAnIOZfdn5roE4hArsRou5"; // Your Auth0 client ID

// // A wrapper for protected routes
// const ProtectedRoute = ({ element }) => {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) return <div>Loading...</div>; // Optionally show a loader while Auth0 initializes

//   return isAuthenticated ? element : <Navigate to="/signin" replace />;
// };

// function App() {
//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       authorizationParams={{
//         redirect_uri: window.location.origin,
//       }}
//       useRefreshTokens={true} // Ensure session is refreshed
//       cacheLocation="localstorage" // Store tokens in localStorage
//     >
//       <Router>
//         <Routes>
//           {/* Public Route for Sign-In */}
//           <Route path="/signin" element={<SignIn />} />

//           {/* Protected Routes */}
//           <Route
//             path="/"
//             element={<ProtectedRoute element={<Layout />} />}
//           >
//             <Route index element={<LandingPage />} />
//             <Route path="audit-form" element={<AuditForm />} />
//           </Route>

//           {/* Redirect all unknown paths to Sign-In */}
//           <Route path="*" element={<Navigate to="/signin" replace />} />
//         </Routes>
//       </Router>
//     </Auth0Provider>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
// import SignIn from "./pages/SignIn";
// import LandingPage from "./pages/LandingPage";
// import AuditForm from "./components/AuditForm";
// import Layout from "./components/Layout";

// // Replace with your Auth0 credentials
// const domain = "dev-fzf1ql1knabosj7z.us.auth0.com"; // Your Auth0 domain
// const clientId = "WJXjdJtdZrq9TDZcxOI0qSmroTdfJD0Y"; // Your Auth0 client ID

// const ProtectedRoute = ({ element }) => {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading...</div>; // Show loading while Auth0 is initializing
//   }

//   // If the user is authenticated, render the requested component, else redirect to login
//   return isAuthenticated ? element : <Navigate to="/signin" replace />;
// };

// function App() {
//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       authorizationParams={{
//         redirect_uri: window.location.origin, // Ensure this matches the callback URL
//       }}
//       useRefreshTokens={true}
//       cacheLocation="localstorage"
//     >
//       <Router>
//         <Routes>
//           <Route path="/signin" element={<SignIn />} />
//           <Route
//             path="/"
//             element={<ProtectedRoute element={<Layout />} />}
//           >
//             <Route index element={<LandingPage />} />
//             <Route path="audit-form" element={<AuditForm />} />
//           </Route>
//           <Route path="*" element={<Navigate to="/signin" replace />} />
//         </Routes>
//       </Router>
//     </Auth0Provider>
//   );
// }

// export default App;



////**** IGNORE THIS BLOCK */
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// import SignIn from "./pages/SignIn";
// import LandingPage from "./pages/LandingPage";
// import AuditForm from "./components/AuditForm";
// import Layout from "./components/Layout";
// import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute

// const App = () => {
//   return (
//     <Auth0Provider
//       domain="dev-fzf1ql1knabosj7z.us.auth0.com"
//       clientId="8i2XD7rJHdEAnIOZfdn5roE4hArsRou5"
//       authorizationParams={{
//         redirect_uri: window.location.origin,
//       }}
//       useRefreshTokens={true}
//       cacheLocation="localstorage"
//     >
//       <Router>
//         <Routes>
//           {/* Public Route */}
//           <Route path="/signin" element={<SignIn />} />
          
//           {/* Protected Routes */}
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Layout />
//               </ProtectedRoute>
//             }
//           >
//             <Route index element={<LandingPage />} />
//             <Route path="audit-form" element={<AuditForm />} />
//           </Route>

//           {/* Redirect any unknown route to /signin */}
//           <Route path="*" element={<Navigate to="/signin" replace />} />
//         </Routes>
//       </Router>
//     </Auth0Provider>
//   );
// };

// export default App;


////**** IGNORE THIS BLOCK */


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import AuditForm from "./components/AuditForm";
import Layout from "./components/Layout";

// Replace with your Auth0 credentials
const domain = "dev-fzf1ql1knabosj7z.us.auth0.com"; // Your Auth0 domain
const clientId = "4MORTBhw8MsGGcYvIeHMRM1ZiHfzvjdY"; // Your Auth0 client ID

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Show loading while Auth0 is initializing
  }

  // If the user is authenticated, render the requested component, else redirect to login
  return isAuthenticated ? element : <Navigate to="/signin" replace />;
};

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin, // Ensure this matches the callback URL
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={<ProtectedRoute element={<Layout />} />}
          >
            <Route index element={<LandingPage />} />
            <Route path="audit-form" element={<AuditForm />} />
          </Route>
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
