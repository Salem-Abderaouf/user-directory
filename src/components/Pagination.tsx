import { LeftArrowIcon, RightArrowIcon } from "../assets/icons/Icons";

interface PaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination : React.FC<PaginationProps> = ({ page, setPage }) => {

    const handlePagination = (type: "next" | "previous") => {
        setPage((prevPage) => (type === "next" ? prevPage + 1 : prevPage - 1));
    };

    const pageNumbers = Array.from({ length: 5 }, (_, index) => page + index - 2).filter((pageNumber) => pageNumber > 0);

    return (
        <div className="flex items-center justify-between my-6 pb-6">
            <button 
            disabled={page===1}
            onClick={()=>handlePagination("previous")}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <LeftArrowIcon />
                <span>previous</span>
            </button>

            <div className="items-center hidden lg:flex gap-x-3">
                {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`px-2 py-1 text-sm rounded-md ${
                    pageNumber === page
                        ? "text-blue-500 bg-blue-100/60"
                        : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    >
                    {pageNumber}
                </button>
                ))}
            </div>

            <button 
            onClick={()=>handlePagination("next")}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>Next</span>
                <RightArrowIcon />
            </button>
        </div>
    )
}
export default Pagination;