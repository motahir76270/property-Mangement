import { createContext, useState, useEffect ,useCallback} from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [selectedList, setselectedList] = useState([]);
   
    return (
        <UserContext.Provider value={{selectedList,setselectedList}}  >
        {children}
        </UserContext.Provider>
    ); 
}