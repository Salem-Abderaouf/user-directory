
interface DropdownProps {
    setUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
    toggleMenue: () => void;
}

const Dropdown = ({setUsersPerPage , toggleMenue}:DropdownProps) => {

    const handleUsersPerPage = (usersPerPage:number) => {
        setUsersPerPage((prevUsersPerPage) => {
            if (prevUsersPerPage !== usersPerPage) {
              toggleMenue();
              return usersPerPage;
            }
            return prevUsersPerPage;
          });
    }

    return (
        <div  className="relative inline-block">
            <div
                className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
            >
                <button onClick={()=>handleUsersPerPage(10)} className="w-full text-right block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> 10 </button>
                <button onClick={()=>handleUsersPerPage(25)} className="w-full text-right block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> 25 </button>
                <button onClick={()=>handleUsersPerPage(50)} className="w-full text-right block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> 50</button>
                <button onClick={()=>handleUsersPerPage(100)} className="w-full text-right block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> 100 </button>
            </div>
        </div>
    )
}
export default Dropdown;