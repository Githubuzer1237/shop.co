import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
   const [isActive, setIsActive] = useState(false)
   const toggleMenu = () => {

    // Бургер меню
     setIsActive(!isActive)
   }
 
   const closeMenu = () => {
     setIsActive(false)
   }



  // добавление больше товаров
   const [visible, setVisible] = useState(4)

   const addProducts = () => {
    setVisible(visible + 4)
   }

    const value = {
        isActive,
        toggleMenu,
        closeMenu,
        visible,
        addProducts
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};