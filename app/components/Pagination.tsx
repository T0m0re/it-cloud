import { Link } from "react-router"


const Pagination = ({currentPage, totalPages}: {currentPage: number, totalPages: number}) => {
  return (
    <div className="flex justify-center my-8 gap-4">
        <Link
            to={`/blog?page=${currentPage - 1}`}
            className={`px-4 py-1 flex items-center bg-gray-200 rounded-lg border border-black/30 ${currentPage === 1 ? "opacity-30 pointer-events-none" : ""}`}
        >
            Previous
        </Link>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
        key={page}
        to={`/blog?page=${page}`}
        className={`px-4 py-1 rounded-lg flex items-center ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
        {page}
        </Link>
    ))}

    <Link
        to={`/blog?page=${currentPage + 1}`}
        className={`px-4 py-1 bg-gray-200 rounded-lg flex items-center ${currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}`}
    >
        Next
    </Link>
</div>
  )
}
export default Pagination