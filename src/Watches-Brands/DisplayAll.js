// import { Link } from "react-router-dom";
// import Header from "../Components/Header";
// import "../Watches-Css/allWatches.css";
// import { MdOutlineHome } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";

// function DisplayAll({ allWatches }) {
//     console.log(allWatches);
//     return (
//         <>
//             <Header />
//             <div className="watches">
//                 <div className="my-container">
//                     <h1 className="mt-4 mb-2">We've found {allWatches.length} results for "Omega"</h1>
//                     <span className="d-flex align-items-center mb-5">
//                         <MdOutlineHome className="home fs-5" /> <MdKeyboardArrowRight className="mx-1" /> Omega Watches
//                     </span>
//                     <div className="row">
//                         {allWatches.map((watch) => {
//                             return (
//                                 <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
//                                     <Link to={`/Omega/${watch.id}`} className="watch d-block text-black" key={watch.id}>
//                                         <img src={watch.image} alt="" />
//                                         <p>{watch.title}</p>
//                                         <p>{watch.description}</p>
//                                         <span className="d-block">${watch.price}</span>
//                                         <span>
//                                             <span>+</span> ${watch.shipping} for shipping
//                                         </span>
//                                     </Link>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default DisplayAll;
