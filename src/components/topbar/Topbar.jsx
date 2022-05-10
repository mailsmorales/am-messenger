// // import "./topbar.css";
// import Button from '@mui/material/Button';
// import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";

// // const Topbar = () => {
// //   const { user, logOut } = UserAuth();

// //   const handleSignOut = async () => {
// //     try {
// //       await logOut();
// //     } catch {
// //       error;
// //     }
// //     console.log(error);
// //   };

//   return (
//     <div className="topbarContainer">
//       <div className="topbarLeft">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">Lamasocial</span>
//         </Link>
//       </div>
//       <div className="topbarCenter">
//         <div className="searchbar">
//           <Search className="searchIcon" />
//           <input
//             placeholder="Search for friend, post or video"
//             className="searchInput"
//           />
//         </div>
//       </div>
//       <div className="topbarRight">
//         <div className="topbarLinks">
//           <span className="topbarLink">Homepage</span>
//         </div>
//         <div className="topbarIcons">
//           <div className="topbarIconItem">
//             <Person />
//           </div>
//           <div className="topbarIconItem">
//             <Chat />
//           </div>
//           <div className="topbarIconItem">
//             <Notifications />
//           </div>
//         </div>
//         {user?.displayName ? (
//           <Button variant="#51a8ff" onClick={handleSignOut}>Выйти</Button>
//         ) : (
//           <Link to="/register"> Войти</Link>
//         )}

//         {/* <Link to={`/profile/${user.username}`}>
//           <img src={user.profilePicture} alt="" className="topbarImg" />
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default Topbar;
