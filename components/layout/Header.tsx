import React from 'react';
import { PropertyCategories } from '@/constants';

const Header: React.FC = () => {
  return (
    <header>
      <div className='flex justify-center bg-[#34967C] gap-3 p-1 text-sm h-fit'>
        <figure >
            <img src="/assets/CaseMinimalistic.svg" alt="A minimalistic case" />
        </figure>
        <p className='p-0.5'>Overseas trip? Get the latest information on travel guides</p>
        <button className='bg-black rounded-full p-1 text-xs'>More Info</button>
        </div>
      <div className='bg-[#EBEBEB] h-[74px] justify-center grid grid-cols-3 text-black items-center'>
        <figure className='p-4'>
            <img src="/assets/logo.svg" alt="" />
        </figure>
        <div className='text-black justify-center border-[#BEBEBE] border w-fit   p-1 rounded-full my-3'>
            <form action="" className='flex divide-x-2'>
                <div className=' border-black pl-2'>
                <label htmlFor="UserLocation">Location</label>
                <input type="text" className="outline-none bg-transparent" name="location" id="UserLocation" placeholder='Search for destination'/>
                </div >
                <div className='border-r-2 border-[#BEBEBE] pl-2'>
                <label htmlFor="CheckIn">Check in</label>
                <input type="text" id='CheckIn' className="outline-none bg-transparent" name='Checkin' placeholder='Add date'/>
                </div>
                <div className='border-r-2 border-[#BEBEBE] pl-2'>
                <label htmlFor="CheckOut"> Check out</label>
                <input type="text" id='CheckOut'className="outline-none bg-transparent" placeholder='Add date'/>
                </div>
                <div className='border-r-2 border-[#BEBEBE] pl-2'>
                    <label htmlFor="People">People</label>
                <input type="text" id='People' className="outline-none bg-transparent" placeholder='Add Guest'/>
                </div>
                
                <button type='submit' className='rounded-full bg-black p-2 text-white'>Search
                </button>
            </form>
        </div>
        <ul className='flex space-x-10 p-1 items-center justify-end'>
            <li className='bg-[#34967C] rounded-full  text-center text-white p-2'>Sign In</li>
            <li className='bg-[#EBEBEB]  text-center border p-2 border-[#BEBEBE] rounded-full'>Sign Up</li>
        </ul>
      </div>
      <div className='bg-[#EBEBEB] h-fit items-center justify-evenly overflow-x-scroll flex space-x-4 p-4'>
      {PropertyCategories?.map((cartegory) => {
        return (
            <div key={cartegory.id} className='p-4 text-black flex-shrink-0 w-46 border rounded shadow items-center justify-center cursor-pointer hover:border-green-400'>
                <img src={cartegory.imageUrl} alt={cartegory.title} className='object-cover rounded'/>
                <h4 className='text-sm'>{cartegory.title}</h4>
            </div>
        )
      })}
      </div>
    </header>
  );
}

export default Header;
