import { useContext, useEffect } from "react";
import { appData } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
    const { data, loading } = appData();
    const navigate = useNavigate()

    const changePage = () => {
        navigate('/1')
    }

    useEffect(() => {
        if (!loading) {
            console.log(">>> Dados estruturados [LoadingPage]:", data);
        }
    }, [loading]);

    return (
        <>
            <div>
                LoadingPage
            </div>
            
            {!loading &&
                changePage()
            }
        </>
    );
};

export default LoadingPage;
