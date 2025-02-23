import React from 'react';
import { Quicksand } from "next/font/google";

const quickSand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
  });

const Footer: React.FC = () => {
  return (
    <footer className={`${quickSand.variable}  bg-[#222222] text-[#CACACA] text-sm`}>
        <div className='bg-[#34967C] w-full h-[29px]'></div>
        <div className='grid grid-cols-2  gap-4 w-7/8 mx-10 mt-6 border-b border-[#CACACA] py-3'>
            <article className='space-y-2 max-w-[540px]  mb-16'>
                <figure>
                    <img src="/assets/footerLogo.svg" alt="Footer Logo" />
                </figure>
                <p className='font-medium'>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
            </article>
            <article className='flex justify-between'>
                <section className='text-sm'>
                    <h4 className='pb-2 text-xl font-semibold'>Explore</h4>
                    <ul>
                        <li className='pb-1'>Apartments in Dubai</li>
                        <li className='pb-1'>Hotels in New York</li>
                        <li className='pb-1'>Villa in Spain</li>
                        <li className='pb-1'>Mansion in Indonesia</li>
                    </ul>
                </section>
                <section className='text-sm'>
                    <h4 className='pb-2 text-xl font-semibold'>Company</h4>
                    <ul>
                        <li className='pb-1'>About us</li>
                        <li className='pb-1'>Blog</li>
                        <li className='pb-1'>Blog</li>
                        <li className='pb-1'>Career</li>
                        <li className='pb-1'>Customers</li>
                        <li className='pb-1'>Brand</li>
                    </ul>
                </section>
                <section className='text-sm'>
                    <h4 className='pb-2 text-xl font-semibold'>Help</h4>
                    <ul>
                        <li className='pb-1'>Support</li>
                        <li className='pb-1'>Cancel booking</li>
                        <li className='pb-1'>Refunds Process</li>
                    </ul>
                </section>
            </article>
        </div>
        <div className='grid grid-cols-2 w-7/8 mx-10 py-2'>
            <p>Some hotel requires you to cancel more than 24 hours before check-in. Details <span className='text-[#34967c]'>here</span></p>
            <ul className='flex justify-between'>
                <li>Terms of Service</li>
                <li>Policy Service</li>
                <li>Cookies Policy</li>
                <li>Partners</li>
            </ul>
        </div>
      
    </footer>
  );
}

export default Footer;
