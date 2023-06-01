import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null );
}