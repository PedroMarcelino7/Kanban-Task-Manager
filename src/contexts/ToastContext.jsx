import React, { createContext, useState, useContext } from 'react'

import CloseableToast from '../ui/toasts/closeabletoast/main'
import TimedToast from '../ui/toasts/timedtoast/main'
import IconedToast from '../ui/toasts/iconedtoast/main'
import CustomToast from '../ui/toasts/customtoast/main'
import DefaultToast from '../ui/toasts/defaulttoast/main'

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const showToast = ({ type, props }) => {
        const id = Date.now()
        setToasts(prev => [...prev, { id, type, props }])
    }

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id))
    }

    const getToastComponent = ({ id, type, props }) => {
        switch (type) {
            case "closeable":
                return <CloseableToast key={id} message={props.message} status={props.status} closeToast={() => removeToast(id)} />
            case "timed":
                return <TimedToast key={id} message={props.message} status={props.status} />
            case "iconed":
                return <IconedToast key={id} message={props.message} status={props.status} />
            case "custom":
                return <CustomToast key={id} {...props} />
            default:
                return <DefaultToast key={id} message={props.message} status={props.status} />
        }
    }

    return (
        <ToastContext.Provider value={{ showToast, removeToast }}>
            {children}
            <div className="toast-container">
                {toasts.map(getToastComponent)}
            </div>
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)