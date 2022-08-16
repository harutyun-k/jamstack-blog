import { Link } from "gatsby";
import * as React from "react"

const Pagination = ({data}) => {
  const { numPages, currentPage } = data;
  if (!numPages || !currentPage) return null;

  const nums = []

  for (let i = 0; i < numPages; i++) {
    nums.push(i)
  }

  const isFirst = currentPage === 1
  const prev =
    currentPage === 2 ? "/archive" : `/archive/page/${currentPage - 1}`
  const isLast = currentPage === numPages
  const nextPage = currentPage + 1

  return (
    <div className="pagination flex flex-wrap gap-4">
      {!isFirst && (
        <span>
          <Link to={prev} rel="prev">
            Previous page
          </Link>
        </span>
      )}
      <div>
        {`${currentPage} of ${nums.length}`}
      </div>
      {!isLast && (
        <Link to={`/archive/page/${nextPage}`} role="next">
          <span className="visually-hidden">
            Next page
          </span>
        </Link>
      )}
    </div>
  )
};

export default Pagination