import React from 'react'
import Container from '../../utils'
import { NavLink, useLocation } from 'react-router-dom'
import { logOut } from '../../redux/slice/auth'
import { useSelector } from 'react-redux'

const Navigation: React.FC = () => {
    const { pathname: location } = useLocation()
    const { token } = useSelector((state: any) => state.auth)

    const islogOut = () => {
        logOut()
    }

    if (location.includes("auth")) return null;
    return (
        <div className='bg-slate-800 text-white'>
            <Container>
                <div className='flex items-center justify-between px-4 py-2 gap-4'>
                    <NavLink to='/'>
                        <strong className='text-4xl'>TY Auth</strong>
                    </NavLink>
                    <ul className='flex gap-4'>
                        {
                            token ? (
                                <li>
                                    <button onClick={islogOut}>Log Out</button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to='/auth/login'>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/auth/register'>Register</NavLink>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Navigation