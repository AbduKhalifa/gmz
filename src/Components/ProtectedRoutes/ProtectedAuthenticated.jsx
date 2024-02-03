


import React from 'react'
import { Navigate, useLocation } from 'react-router'

export default function ProtectedAuthenticated({ children, where, check }) {
    const location = useLocation();

    if (check) {
        return <Navigate to={where} replace />
    }
    return children
}
