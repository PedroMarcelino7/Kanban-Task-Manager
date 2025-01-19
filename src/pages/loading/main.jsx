import { useEffect } from "react";
import { appData } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
    const { data, loading } = appData();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            console.log(">>> Dados estruturados [LoadingPage]:", data);
            navigate('/1');
        }
    }, [loading, navigate, data]);

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
};

export default LoadingPage;
