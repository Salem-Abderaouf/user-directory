import React from 'react';
import { Input } from './Input';
import { FiltersIcon } from '../assets/icons/Icons';
import useToggler from '../hooks/useToggler';
import Filters from './Filters';

interface HeaderProps {
    filters: { email: boolean; phone: boolean };
    setFilters: React.Dispatch<React.SetStateAction<{ email: boolean; phone: boolean }>>;
    onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({onSearch , filters , setFilters}) => {

    const [isFiltersMenueOpen , toggleFilters] = useToggler(false);
    
    
    return (
        <header className="bg-white shadow-md w-full h-[73px] flex items-center dark:bg-slate-900 mb-10">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
                <div className="flex self-end">
                    <div className="flex items-center justify-around self-end">
                        <Input type="text" placeholder='Search for user' onChange={(e)=>onSearch(e.target.value)}/>
                        <button 
                        onClick={toggleFilters}
                        className='mx-2 rounded-xl border-2 border-transparent p-1 transition-all duration-200 hover:ring-1 hover:border-2'>
                            <FiltersIcon />
                        </button>
                    </div>
                </div>
                {isFiltersMenueOpen &&
                <Filters filters={filters} setFilters={setFilters} />
                }
            </div>
        </header>
    );
};

export default React.memo(Header);