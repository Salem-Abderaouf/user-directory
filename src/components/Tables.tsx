import useToggler from "../hooks/useToggler";
import { User } from "../types/types";
import Dropdown from "./Dropdown";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface TablesProps {
    users: User[];
    usersPerPage: number;
    setUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Tables:React.FC<TablesProps> = ({users , usersPerPage , setUsersPerPage}) => {

    const [isPagesMenuOpen , toggleMenu] = useToggler(false);
    
    return(
    <div className="max-w-[880px] mx-auto">
        <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Users</h2>
            <button 
            onClick={toggleMenu}
            className="cursor-pointer">
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{usersPerPage} users per page</span>
            </button>
            {isPagesMenuOpen && <Dropdown setUsersPerPage={setUsersPerPage} toggleMenue={toggleMenu}/>}
        </div>

        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <TableHead />
                            <TableBody users={users}/>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Tables;