import Logo from '../assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import UseAuthContext from '../context/useAuth'
import { useState } from 'react'
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

const Navbar = () => {
    const {state, action} = UseAuthContext()
    const [expand, setExpand] = useState(false)
    return (
        <div className="w-full bg-slate-100 p-2 fixed">
            <div className="md:container md:mx-auto flex justify-between items-center">
                <div className='flex gap-3 items-center'>
                    <Image 
                        src={Logo}
                        width={40}
                        height={40}
                    />
                    <p className='text-4xl font-medium hidden md:block'>
                        <span className='text-lime-500'>
                            FARM
                        </span>
                        <span className='text-orange-300'>
                            OBS
                        </span>
                    </p>
                </div>
                <div className='flex items-center gap-6 relative'>
                    <Link href={'/'}>
                        <a className='text-orange-400 font-medium hover:text-orange-500'>
                            Home
                        </a>
                    </Link>
                    {state.auth ? (
                        <>
                            <Link href={'/dashboard'}>
                                <a className='text-orange-400 font-medium hover:text-orange-500'>
                                    Dashboard
                                </a>
                            </Link>
                            <p onClick={()=>setExpand(!expand)} className='text-orange-400 font-medium hover:text-orange-500 cursor-pointer flex items-center gap-2'>
                                { state.user?.name?.split(' ')[0] } 
                                {expand ? (
                                    <span>
                                        <BiCaretUp className='text-l' />
                                    </span>
                                ):(
                                    <span>
                                        <BiCaretDown className='text-l' />
                                    </span>
                                )}
                            </p>
                            {expand && (
                                <div className='absolute right-0 top-full bg-white border-2 border-orange-300 p-2 rounded-md w-full md:w-[200px]'>
                                    <p onClick={action.logout} className='cursor-pointer'>Logout</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link href={'/auth/login'}>
                            <a className='bg-orange-100 hover:bg-orange-200 font-medium text-lime-500 px-3 py-1 rounded-full border border-orange-500'>
                                Login
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Navbar