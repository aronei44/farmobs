import Logo from '../assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import UseAuthContext from '../context/useAuth'

const Navbar = () => {
    const {state} = UseAuthContext()
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
                <div className='flex items-center gap-6'>
                    <Link href={'/'}>
                        <a className='text-orange-400 font-medium hover:text-orange-500'>
                            Home
                        </a>
                    </Link>
                    {state.auth ? (
                        <Link href={'/dashboard'}>
                            <a className='text-orange-400 font-medium hover:text-orange-500'>
                                Dashboard
                            </a>
                        </Link>
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