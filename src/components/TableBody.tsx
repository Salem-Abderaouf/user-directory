import { Link } from "react-router-dom";
import { DetailsIcon } from "../assets/icons/Icons"
import { User } from "../types/types";


const TableBody = ({users} : {users : User[]}) =>{
    
    return (
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {users.map((user)=>(
                <tr className="text-gray-500" key={user.login.uuid}>
                    <td className="border-t-0 px-4 align-middle text-sm font-normal p-4 text-left">
                        <div className="flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                                <img className="object-cover w-10 h-10 rounded-full" src={user.picture.thumbnail} alt={user.name.first}/>
                                <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white">{`${user.name.first} ${user.name.last}`}</h2>
                                </div>
                            </div>
                         </div>
                    </td>
                    <td className="hidden md:table-cell border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className={`h-1.5 w-1.5 rounded-full ${user.gender==="male"?"bg-blue-500":"bg-rose-500"}`}></span>
                            <h2 className={`text-sm font-normal ${user.gender==="male"?"text-blue-500":"text-rose-500"}`}>{user.gender}</h2>
                        </div>
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    {user.phone}
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                            <td className="px-2 sm:px-4 py-4 text-sm font-medium text-gray-700 ">{user.email}</td>
                        </div>
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center gap-x-6">
                            <Link to={`user/${user.login.uuid}`} state={user}>
                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                    <DetailsIcon />
                                </button>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}
export default TableBody;