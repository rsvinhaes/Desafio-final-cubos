import { createContext } from 'react';
import useGlobalProvider from '../hooks/useGlobalContextProvider';

const GlobalContext = createContext();

export function GlobalProvider(props) {
    const globalProvider = useGlobalProvider();

    return (
        <GlobalContext.Provider value={globalProvider}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;