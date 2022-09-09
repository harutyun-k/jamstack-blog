import { Link } from "gatsby";
import * as React from "react"

interface Pagination {
  data: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  }
}

export default function Pagination({data}: Pagination): null | JSX.Element {
  const { numPages, currentPage } = data;
  if (!numPages || !currentPage) {
    return null;
  }

  const nums: number[] = []

  for (let i = 0; i < numPages; i++) {
    nums.push(i)
  }

  const isFirst: boolean = currentPage === 1
  const prev: string =
    currentPage === 2 ? "/archive" : `/archive/page/${currentPage - 1}`
  const isLast: boolean = currentPage === numPages
  const nextPage: number = currentPage + 1

  return (
    <div className="flex flex-wrap items-center gap-4">
      {!isFirst && (
        <Link
          className="flex w-10 h-10 block bg-slate-200 hover:bg-slate-300 rounded-full"
          to={prev}
          rel="prev"
          aria-label="Previous page"
        >
          <svg className="m-auto w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
      )}
      <div>
        {`${currentPage} of ${nums.length}`}
      </div>
      {!isLast && (
        <Link
          className="flex w-10 h-10 block bg-slate-200 hover:bg-slate-300 rounded-full"
          to={`/archive/page/${nextPage}`}
          role="next"
          aria-label="Next page"
        >
          <svg className="m-auto w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      )}
    </div>
  )
}