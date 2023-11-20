import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProtectedRoutes({ component: Component, ...rest }) {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    return user !== null ? <Component {...rest} /> : navigate('/login')
}

export default ProtectedRoutes