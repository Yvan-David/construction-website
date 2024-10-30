// import { useEffect, useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import RoleChangeModal from "../../components/RoleChange";
// import axiosClient from "../../hooks/AxiosInstance";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// interface User {
//   id: number;
//   username: string;
//   email: string;
//   userRole: string;
//   status: string;
// }

// const UsersTable = () => {

//   const client = axiosClient();
//   const notify = (message: string) => toast(message);

//   const fetchUsers = async (pageNumber: number) => {






//   };

//   return (
//     <div className="overflow-x-auto">
//       <h2 className="text-xl font-semibold mb-4 bg-white">Latest Users</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse text-xs">
//           <thead>
//             <tr>
//               <th className="border-b border-gray-200 bg-gray-100 text-left">
//                 S/N
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-xs text-left">
//                 Names
//               </th>
//               <th className="border-b border-gray-200 bg-gray-100 text-left hidden md:table-cell">
//                 Email
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left hidden md:table-cell">
//                 Role
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">
//                 Status
//               </th>
//               <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <tr>
//                 <td colSpan={6} className="text-center py-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : (
//               users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td className="border-b border-gray-200 text-left">
//                     {(page - 1) * 10 + index + 1}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-left">
//                     {user.username}
//                   </td>
//                   <td className="border-b border-gray-200 text-left hidden md:table-cell">
//                     {user.email}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-left hidden md:table-cell">
//                     {user.userRole}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-left">
//                     <span
//                       className={
//                         user.status === "active"
//                           ? "text-green-500"
//                           : "text-red-500"
//                       }
//                     >
//                       {user.status === "active" ? "Active" : "Inactive"}
//                     </span>
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-left">
//                     <div className="flex space-x-2 max-xs:block max-xs:space-y-2 max-xs:space-x-0">
//                       <button
//                         aria-label="edit"
//                         className="bg-customBlueBg text-customBlue px-5 max-xs:px-2 rounded-full flex items-center justify-center"
//                         onClick={() => openModal(user)}
//                       >
//                         <CiEdit className="text-lg" />
//                         role
//                       </button>
//                       <button
//                         aria-label="change status"
//                         className="bg-customGreenBg text-customGreen px-3  max-xs:px-0 rounded-full flex items-center justify-center"
//                         onClick={() => openStatusModal(user)}
//                       >
//                         <CiEdit className="text-lg" />
//                         status
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={handlePrevPage}
//           className={`bg-back_next text-white px-4 py-2 rounded ${page === 1 && "opacity-50 cursor-not-allowed"}`}
//           disabled={page === 1}
//         >
//           Back
//         </button>
//         <h4>Page {page}</h4>
//         <button
//           onClick={handleNextPage}
//           className={`bg-back_next text-white px-4 py-2 rounded ${page === totalPages && "opacity-50 cursor-not-allowed"}`}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//       {selectedUser && (
//         <RoleChangeModal
//           isOpen={!!selectedUser}
//           onClose={closeModal}
//           onSave={saveRole}
//           currentRole={newRole}
//           setNewRole={setNewRole}
//         />
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default UsersTable;
