import Logo from '../../assets/images/logo.svg'
import LogoGoogle from '../../assets/images/google-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Index = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-2">
      <div className="md:w-1/3 md:flex md:flex-col md:gap-1 md:items-center hidden">
        <Image
          src={Logo}
          width={200}
          height={200}
         />
        <p>
          Rencanakan tanammu. Rencanakan masa depan.
        </p>
      </div>
      <div className="md:w-1/3 w-full border border-orange-100 p-5 text-center">
        <p className='text-2xl font-medium mb-9 text-orange-800'>Masuk ke akun anda</p>
        <input type={'email'} className="border-b border-b-orange-100 w-full text-center focus:ring-0 focus:outline-none text-orange-600 mb-4" placeholder='Masukan Email Anda' />
        <input type={'password'} className="border-b border-b-orange-100 w-full text-center focus:ring-0 focus:outline-none text-orange-600 mb-4" placeholder='Masukan Password Anda' />
        <button className='w-full text-sky-900 font-medium bg-orange-300 py-2 rounded-full border border-orange-800 active:bg-orange-400 mt-10'>
          Masuk
        </button>
        <p>
          Belum punya akun ? <Link href={'/auth/register'}>
            <a className='text-blue-600'>Register</a>
          </Link>
        </p>
        <Link href={'/auth/google'}>
          <a className='w-full block py-2 rounded-full border border-blue-800 active:bg-slate-300 mt-10'>
            <div className='flex gap-3 items-center justify-center'>
              <Image
                src={LogoGoogle}
                width={14}
                height={14}
               />
              <p className='text-sky-900 font-medium'>
                Masuk Dengan Google
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
export default Index