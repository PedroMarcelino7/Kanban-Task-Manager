import React, { createContext, useState, useContext } from "react";
import CloseableToast from "../ui/toasts/closeabletoast/main";
import TimedToast from "../ui/toasts/timedtoast/main";
import IconedToast from "../ui/toasts/iconedtoast/main";
import CustomToast from "../ui/toasts/customtoast/main";
import DefaultToast from "../ui/toasts/defaulttoast/main";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null);

    const showToast = ({ type, message, status }) => {
        setToast({ type, message, status });
    };

    const hideToast = () => {
        setToast(null);
    };

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}

            {toast && (
                <>
                    {toast.type === "closeable" && <CloseableToast message={toast.message} status={toast.status} onClose={hideToast} />}
                    {toast.type === "timed" && <TimedToast message={toast.message} status={toast.status} onClose={hideToast} />}
                    {toast.type === "iconed" && <IconedToast message={toast.message} status={toast.status} onClose={hideToast} />}
                    {toast.type === "custom" && <CustomToast message={toast.message} status={toast.status} onClose={hideToast} />}
                    {!["closeable", "timed", "iconed", "custom"].includes(toast.type) && <DefaultToast message={toast.message} status={toast.status} onClose={hideToast} />}
                </>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
