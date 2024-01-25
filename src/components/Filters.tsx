
interface FiltersProps {
    filters: { email: boolean; phone: boolean };
    setFilters: React.Dispatch<React.SetStateAction<{ email: boolean; phone: boolean }>>;
    // toggleMenue: () => void;
}

const Filters = ({filters , setFilters }:FiltersProps) => {

    const handleFiltration = (filter:string) => {
        if(filter === "email"){
            setFilters({...filters,email: !filters.email});
        }else{
            setFilters({...filters,phone: !filters.phone});
        }
    }

    return (
        <div  className="relative inline-block">
            <div
                className="absolute right-0 top-10 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                <div className="w-full text-right px-4 py-3 flex  justify-between transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <button onClick={()=>handleFiltration("email")} className="text-sm text-gray-600 capitalize "> E-mail </button>
                    <input type="checkbox" checked={filters.email} onChange={()=>handleFiltration("email")} className="mr-2"/>
                </div>
                <div className="w-full text-right px-4 py-3 flex justify-between transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <button onClick={()=>handleFiltration("phone")} className="text-sm text-gray-600 capitalize "> Phone </button>
                    <input type="checkbox" checked={filters.phone} onChange={()=>handleFiltration("phone")} className="mr-2"/>
                </div>
            </div>
        </div>
    )
}
export default Filters;