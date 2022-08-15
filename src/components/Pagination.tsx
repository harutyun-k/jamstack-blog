import { Link } from "gatsby";
import * as React from "react"

const Pagination = ({data}) => {
  const { numPages, currentPage } = data;
  if (!numPages || !currentPage) return null;

  const nums = []

  for (let i = 0; i < numPages; i++) {
    nums.push(i)
  }

  return (
    <ul className="flex">
      {nums.map((num) => (
        <li key={num} className={num + 1 === currentPage ? "underline" : ""}>
          <Link to={num === 0 ? "/archive" : `/archive/page/${num + 1}`} className="font-bold mr-5" >{num + 1}</Link>
        </li>
      ))}
    </ul>
  )
};

export default Pagination