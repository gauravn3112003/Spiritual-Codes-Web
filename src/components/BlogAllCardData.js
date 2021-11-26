// import React, { useEffect,useState, useContext } from 'react'
// import contactContext from "../Context/Contact/contactContext";
// import BlogCard from "./BlogCard";
// import "../App.css";
// import Spinner from './Spinner';



  
// export default function BlogAllCardData() {
//   function bcard(val) {
//     return (
//       <BlogCard
//         image={val.image}
//         tag={val.tag}
//         head={val.title}
//         descri={val.description}
//         date={val.date}
//         id={val._id}
//         key={val._id}
//       />
//     );
//   }

//   const context = useContext(contactContext);
//   const {blogs,getBlog} = context;
//   const [loading, setLoading] = useState(false)
//   useEffect(()=>{
//     getBlog();
//     setLoading(true);
//   },[])
 
//     return (
//         <>
//         {loading?blogs.map(bcard):<Spinner/>}
        
//         </>
//     )
// }

import React, { useEffect,useState, useContext } from 'react'
import contactContext from "../Context/Contact/contactContext";
import BlogCard from "./BlogCard";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import "../App.css";



  
export default function BlogAllCardData() {
  const context = useContext(contactContext);
  const {blogs,getBlog} = context;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  
  useEffect(()=>{
    getBlog();
    console.log(displayUsers)
  },[])

  const displayUsers = blogs
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <BlogCard
        image={user.image}
        tag={user.tag}
        head={user.title}
        descri={user.description}
        date={user.date}
        id={user._id}
        key={user._id}
      />
      );
    });
  const pageCount = Math.ceil(blogs.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
 
    return (
        <>
        {displayUsers}
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
        
        </>
    )
}
