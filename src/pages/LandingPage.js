


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleGoToForm = () => {
//     navigate("/audit-form");
//   };

//   return (
    
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Dashboard</h1>
//         <p className="text-lg text-gray-600 mt-2">Welcome to the 5S Audit dashboard.</p>
//       </header>
//       <button
//         onClick={handleGoToForm}
//         className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
//       >
//         Go to Audit Form
//       </button>
//     </div>
//   );
// };

// export default LandingPage;


// *** Before this line-WOrking Without Authentication***

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const handleGoToForm = () => {
    navigate("/audit-form");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">
          Welcome to the 5S Audit dashboard, {user?.name || "User"}.
        </p>
      </header>
      <button
        onClick={handleGoToForm}
        className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
      >
        Go to Audit Form
      </button>
    </div>
  );
};

export default LandingPage;

