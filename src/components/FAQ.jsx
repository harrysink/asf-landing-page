import React from 'react'
import { useState, useEffect, useRef  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import poweredBy from '../assets/about-2-4.jpg'
import './FAQ.css'

export const FAQ = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    // for open
    const contentRef = useRef(null);
    useEffect(() => {
        contentRef.current.style.maxHeight = open
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, open]);
    const toggleAccordion = () => {
        setOpen(!open);
    }

    // for open2
    const contentRef2 = useRef(null);
    useEffect(() => {
        contentRef2.current.style.maxHeight = open2
            ? `${contentRef2.current.scrollHeight}px`
            : "0px";
    }, [contentRef2, open2]);
    const toggleAccordion2 = () => {
        setOpen2(!open2);
    }

    // for open3
    const contentRef3 = useRef(null);
    useEffect(() => {
        contentRef3.current.style.maxHeight = open3
            ? `${contentRef3.current.scrollHeight}px`
            : "0px";
    }, [contentRef3, open3]);
    const toggleAccordion3 = () => {
        setOpen3(!open3);
    }

    // for open4
    const contentRef4 = useRef(null);
    useEffect(() => {
        contentRef4.current.style.maxHeight = open4
            ? `${contentRef4.current.scrollHeight}px`
            : "0px";
    }, [contentRef4, open4]);
    const toggleAccordion4 = () => {
        setOpen4(!open4);
    }

    // for open5
    const contentRef5 = useRef(null);
    useEffect(() => {
        contentRef5.current.style.maxHeight = open5
            ? `${contentRef5.current.scrollHeight}px`
            : "0px";
    }, [contentRef5, open5]);
    const toggleAccordion5 = () => {
        setOpen5(!open5);
    }

  return (
    <div className='FAQ mb-20'>
        <p className='text-left mb-10 text-3xl font-bold text-gray-500'>Frequently Asked Questions (FAQ's)</p>
        <div className='flex border border-slate-500 rounded-xl p-4'>
            {/* image beside accordion */}
            <div className='border mr-4 rounded-xl w-[30%] max-h-[100%]'>
                <img src={poweredBy} alt="powered by Africa Startup Factory" className='border rounded-xl object-fill w-[100%] h-[100%]'/>
            </div>

            {/* FAQ accordion div */}
            <div className='w-[70%]'>
                {/* 1st FAQ */}
                <button
                    className='question-section p-3 w-full mb-3 {`question-section ${open}'
                    onClick={toggleAccordion}
                >
                    <div>
                        {/* question */}
                        <div className='question-align flex items-center text-left'>
                            <h4 className='question-style text-md text-amber-500 w-full font-bold'>Is the Program free or are there hidden charges?</h4>
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className={open ? `question-icon rotate rotate-45 text-amber-400` : `question-icon text-amber-400`} 
                            />
                        </div>

                        {/* answer */}
                        <div
                            ref={contentRef}
                            className={open ? `answer answer-divider transition-all ease-in-out duration-500 pt-1 mt-2` : `answer ml-2 mr-2 max-h-0px overflow-hidden transition-all ease-in-out duration-500`}
                        >
                            <p className='text-left text-sm'>The program is completely free of charge. No costs whatsoever.</p>
                        </div>
                    </div>
                </button>

                {/* 2nd FAQ */}
                <button
                    className='question-section p-3 w-full mb-3 {`question-section ${open}'
                    onClick={toggleAccordion2}
                >
                    <div>
                        {/* question */}
                        <div className='question-align flex items-center text-left'>
                            <h4 className='question-style text-md text-amber-500 w-full font-bold'>What's the duration?</h4>
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className={open2 ? `question-icon rotate rotate-45 text-amber-400` : `question-icon text-amber-400`} 
                            />
                        </div>

                        {/* answer */}
                        <div
                            ref={contentRef2}
                            className={open2 ? `answer answer-divider transition-all ease-in-out duration-500 pt-1 mt-2` : `answer ml-2 mr-2 max-h-0px overflow-hidden transition-all ease-in-out duration-500`}
                        >
                            <p className='text-left text-sm'>Program runs for an average of 12 weeks.</p>
                        </div>
                    </div>
                </button>

                {/* 3rd FAQ */}
                <button
                    className='question-section p-3 w-full mb-3 {`question-section ${open3}'
                    onClick={toggleAccordion3}
                >
                    <div>
                        {/* question */}
                        <div className='question-align flex items-center text-left'>
                            <h4 className='question-style text-md text-amber-500 w-full font-bold'>What happens after the program?</h4>
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className={open3 ? `question-icon rotate rotate-45 text-amber-400` : `question-icon text-amber-400`}
                            />
                        </div>

                        {/* answer */}
                        <div
                            ref={contentRef3}
                            className={open3 ? `answer answer-divider transition-all ease-in-out duration-500 pt-1 mt-2` : `answer ml-2 mr-2 max-h-0px overflow-hidden transition-all ease-in-out duration-500`}
                        >
                            <p className='text-left text-sm'>Participants who successfully completed all their projects and assignments 
                                will be invited to a demo day where they will pitch to potential recruiters and investors. We will also regularly 
                                publish job opportunities, both physical and remote, to successful candidates.
                            </p>
                        </div>
                    </div>
                </button>

                {/* 4th FAQ */}
                <button
                    className='question-section p-3 w-full mb-3 {`question-section ${open4}'
                    onClick={toggleAccordion4}
                >
                    <div>
                        {/* question */}
                        <div className='question-align flex items-center text-left'>
                            <h4 className='question-style text-md text-amber-500 w-full font-bold'>What's the news about the 10 Million Naira grant?</h4>
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className={open4 ? `question-icon rotate rotate-45 text-amber-400` : `question-icon text-amber-400`}
                            />
                        </div>

                        {/* answer */}
                        <div
                            ref={contentRef4}
                            className={open4 ? `answer answer-divider transition-all ease-in-out duration-500 pt-1 mt-2` : `answer ml-2 mr-2 max-h-0px overflow-hidden transition-all ease-in-out duration-500`}
                        >
                            <p className='text-left text-sm'>Yes. Wema Bank has generously provided the sum of N10,000,000 to be awarded to the top 
                                10 candidates, and to be presented on the demo day. All participants will get an automatic Wema Bank account.
                            </p>
                        </div>
                    </div>
                </button>

                {/* 5th FAQ */}
                <button
                    className='question-section p-3 w-full mb-0 {`question-section ${open5}'
                    onClick={toggleAccordion5}
                >
                    <div>
                        {/* question */}
                        <div className='question-align flex items-center text-left'>
                            <h4 className='question-style text-md text-amber-500 w-full font-bold'>What other thing do I need to know?</h4>
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className={open5 ? `question-icon rotate rotate-45 text-amber-400` : `question-icon text-amber-400`}
                            />
                        </div>

                        {/* answer */}
                        <div
                            ref={contentRef5}
                            className={open5 ? `answer answer-divider transition-all ease-in-out duration-500 pt-1 mt-2` : `answer ml-2 mr-2 max-h-0px overflow-hidden transition-all ease-in-out duration-500`}
                        >
                            <p className='text-left text-sm'>You can only access the program you registered for. You will have to log in 
                                with the registered e-mail address. You will have access 24 hours after you've registered. Failure to 
                                submit 5 projects in a row will lead to disqualification and revocation of your access. Open to all ladies 
                                of all ages. Refer any lady you know.
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}
