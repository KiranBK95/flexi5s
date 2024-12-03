// import React, { useState } from "react";

// const AuditForm = () => {
//   const [formData, setFormData] = useState({
//     question1: null,
//     question2: null,
//     question3: null,
//     question4: null,
//     question5: null,
//   });

//   const questions = [
//     "Is the workspace free of unnecessary items? (Sort)",
//     "Are items organized for efficiency? (Set in Order)",
//     "Is the workspace clean and maintained regularly? (Shine)",
//     "Are procedures followed consistently? (Standardize)",
//     "Is there ongoing commitment to improvement? (Sustain)",
//   ];

//   const handleInputChange = (questionKey, value) => {
//     setFormData({
//       ...formData,
//       [questionKey]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Audit form submitted successfully!");
//     // Here you would send `formData` to the backend API
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">5S Audit Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {questions.map((question, index) => (
//           <div key={index} className="border-b pb-4 mb-4">
//             <label className="block text-lg text-gray-700 font-medium">
//               {question}
//             </label>
//             <div className="flex items-center mt-2 space-x-4">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question${index + 1}`}
//                   value="Yes"
//                   className="form-radio h-5 w-5 text-blue-600"
//                   onChange={() =>
//                     handleInputChange(`question${index + 1}`, "Yes")
//                   }
//                 />
//                 <span>Yes</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`question${index + 1}`}
//                   value="No"
//                   className="form-radio h-5 w-5 text-red-600"
//                   onChange={() =>
//                     handleInputChange(`question${index + 1}`, "No")
//                   }
//                 />
//                 <span>No</span>
//               </label>
//             </div>
//           </div>
//         ))}
//         <div className="text-right items-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition"
//           >
//             Submit 
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuditForm;


// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

// const AuditForm = () => {
//   const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const [answers, setAnswers] = useState({
//     question1: null,
//     question2: null,
//     question3: null,
//     question4: null,
//     question5: null,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAnswers((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isAuthenticated) {
//       alert("You need to be logged in to submit the form.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Get the access token
//       //const token = await getAccessTokenSilently();
//       const token = await getAccessTokenSilently({
//         audience: "https://localhost:7275/", // Use your API Identifier
//         scope: "openid profile email offline_access",
//       });
    
//       console.log(token);
//       // Send the form data to the backend with the Authorization header
//       const response = await axios.post(
//         "https://localhost:7275/api/FiveTake",
//         answers,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log(response);

//       if (response.status === 200) {
//         alert("Form submitted successfully!");
//         // Reset form
//         setAnswers({
//           question1: null,
//           question2: null,
//           question3: null,
//           question4: null,
//           question5: null,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error submitting the form.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">5S Audit Form</h1>
//       <p className="text-gray-600 mb-6">
//         Fill out the form below to complete the 5S Audit. Each question is a
//         Yes/No response.
//       </p>
//       <form onSubmit={handleSubmit}>
//         {[1, 2, 3, 4, 5].map((q) => (
//           <div className="mb-4" key={`question${q}`}>
//             <label
//               htmlFor={`question${q}`}
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Question {q}:
//             </label>
//             <div>
//               <label className="mr-4">
//                 <input
//                   type="radio"
//                   name={`question${q}`}
//                   value="yes"
//                   onChange={handleInputChange}
//                   checked={answers[`question${q}`] === "yes"}
//                   className="mr-1"
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question${q}`}
//                   value="no"
//                   onChange={handleInputChange}
//                   checked={answers[`question${q}`] === "no"}
//                   className="mr-1"
//                 />
//                 No
//               </label>
//             </div>
//           </div>
//         ))}
//         <button
//           type="submit"
//           className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition ${
//             isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AuditForm;



import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const AuditForm = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("You need to be logged in to submit the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await getAccessTokenSilently({
        // audience: "https://web.flexitake5api/",
        // scope: "openid profile email offline_access",
      });
      console.log("Access Token:", token);

      const response = await axios.post(
        "https://localhost:7275/api/FiveTake",
        answers,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Backend Response:", response.data);

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setAnswers({
          question1: null,
          question2: null,
          question3: null,
          question4: null,
          question5: null,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert(`There was an error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">5S Audit Form</h1>
      <p className="text-gray-600 mb-6">
        Fill out the form below to complete the 5S Audit. Each question is a Yes/No response.
      </p>
      <form onSubmit={handleSubmit}>
        {[1, 2, 3, 4, 5].map((q) => (
          <div className="mb-4" key={`question${q}`}>
            <label
              htmlFor={`question${q}`}
              className="block text-gray-700 font-medium mb-2"
            >
              Question {q}:
            </label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name={`question${q}`}
                  value="yes"
                  onChange={handleInputChange}
                  checked={answers[`question${q}`] === "yes"}
                  className="mr-1"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name={`question${q}`}
                  value="no"
                  onChange={handleInputChange}
                  checked={answers[`question${q}`] === "no"}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AuditForm;
