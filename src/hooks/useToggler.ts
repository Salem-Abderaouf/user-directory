import { useState } from 'react';

const useToggler = (initialValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = () => {
        setValue((prevValue) => !prevValue);
    };

    return [value, toggleValue];
};

export default useToggler;