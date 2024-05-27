import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FAQ } from './FAQ'
import './Body.css'

export const Body = () => {
  return (
    <div className='relative body mt-5 p-7'>
        {/* welcome section */}
        <section className='text-center text-bold mb-20'>
            <p className='mb-2'>WELCOME TO AFRICA STARTUP FACTORY</p>
            <p className='tech-journey mb-3 text-7xl text-gray-800'>Your tech journey begins here!</p>
            <p className='px-20 mb-4'><span className='text-amber-400 font-medium'>Transitioning to Tech for Women</span> program is designed to provide 
                women with the skills, tools and necessary support needed to 
                succeed in the tech industry. By helping women learn different 
                tech skills as well as exposing them to the business of tech, 
                we aim to fortify the workforce, propel technological advancements, 
                and establish a foundation for a more inclusive and equitable future.
            </p>
            <button className='bg-amber-400 rounded-3xl px-3 py-2 font-semibold text-white hover:bg-amber-500 ease-in-out duration-300'>start learning</button>
        </section>

        {/* how does it work? */}
        <section className='w-full mb-20 mr-7 ml-7'>
            <p className='text-center mb-10 text-3xl font-bold text-gray-500'>How does it work?</p>
            <div className='flex'>
                {/* 1 and 4 */}
                <div className='w-[35%]'>
                    <div className='flex justify-end'>
                        <p className='step-1 h-[200px] mb-5 flex items-center font-bold text-slate-500 text-sm text-center border border-2 border-slate aspect-square p-4 rounded-full hover:bg-amber-400 duration-500 ease-in-out cursor-pointer'>
                            1. Register at http://tinyurl.com/tttfw: <br></br> 
                            Registration comes with an automatic 
                            Wema Bank account, except if you already 
                            own one.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <p className='h-[200px] flex items-center text-center text-sm font-bold text-amber-400 border border-slate border-2 aspect-square p-3 rounded-full hover:bg-slate-500 duration-500 ease-in-out cursor-pointer'>4. Get Ready for The Demo Day:<br></br> 
                            Successful participants will be invited to 
                            showcase their projects and pitch to recruiters 
                            and investors.
                        </p>
                    </div>
                </div>

                {/* 3 */}
                <div className='w-[30%] flex items-center justify-center'>
                    <p className='h-[200px] flex items-center text-center border text-sm text-slate-500 font-bold border-slate border-2 aspect-square p-4 rounded-full hover:bg-amber-400 duration-500 ease-in-out cursor-pointer'>3. Learn at your own pace:<br></br> 
                        You will be required to turn in weekly 
                        assignments/projects.
                    </p>
                </div>

                {/* 2 and 5 */}
                <div className='w-[35%]'>
                    <div className='flex justify-normal mb-5'>
                        <p className='h-[200px] flex items-center text-center text-sm font-bold text-amber-400 border border-slate border-2 aspect-square p-4 rounded-full hover:bg-slate-500 duration-500 ease-in-out cursor-pointer'>2. Log in with your registered email address:<br></br> 
                            You can only access the program you 
                            registered for.
                        </p>
                    </div>
                    <div className='flex justify-normal'>
                        <p className='h-[200px] flex items-center text-center text-sm font-bold text-slate-500 border border-slate border-2 aspect-square p-4 rounded-full hover:bg-amber-400 duration-500 ease-in-out cursor-pointer'>5. 10 Million Naira Up for Grabs:<br></br> 
                            10 top participants will each win 1 Million 
                            Naira worth of grants!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ section */}
        <div><FAQ /></div>
    </div>
  )
}
