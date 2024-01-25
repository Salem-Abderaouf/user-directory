const TableHead = () =>{
    return (
        <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
                <th scope="col" className="py-3 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-x-3">
                        <span>Name</span>
                    </div>
                </th>

                <th scope="col" className="hidden md:block py-3 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <button className="flex items-center gap-x-2">
                        <span>Gender</span>
                    </button>
                </th>

                <th scope="col" className="py-3 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <button className="flex items-center gap-x-2">
                        <span>Phone</span>
                    </button>
                </th>

                <th scope="col" className="py-3 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>

                <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
    )
}
export default TableHead;