import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { IoIosSend } from "react-icons/io";

export default function Contact() {
    return (
        <>
            <div className='contact text-white lg:flex lg:justify-evenly mt-20' id='contact'>
                <div className='contact-section1 pt-10 lg:pt-28 space-y-3'>
                    <h1 className='text-4xl text-center lg:text-5xl'>Do you have any questions?</h1>
                    <p className='text-center lg:text-left lg:w-[600px]'>I'm always there to help you, alternatevily you can contact me through my social media below</p>
                    <div className='flex justify-center lg:justify-start'>
                        <div className='flex gap-4'>
                            <FaFacebook className='hover:text-[#F5BD02] cursor-pointer text-xl md:text-3xl hover:scale-105 duration-150' />
                            <FaInstagram className='hover:text-[#F5BD02] cursor-pointer text-xl md:text-3xl hover:scale-105 duration-150' />
                            <FaTwitter className='hover:text-[#F5BD02] cursor-pointer text-xl md:text-3xl hover:scale-105 duration-150' />
                        </div>
                    </div>
                </div>
                <div className='separator lg:hidden pt-6'>
                    <p className='text-center'>Or</p>
                </div>
                <div className='pt-6 lg:pt-28 lg:w-[800px] flex justify-center text-gray-200'>
                    <form action="" className='space-y-5'>
                        <div className='flex inputBox'>
                            <input type="text" name="fullname" required="required" id="fullname" className='h-12 w-[400px] p-[10px] outline-none rounded-md'/>
                            <span>FullName</span>
                        </div>
                        <div className='flex inputBox'>
                            <input type="email" name="email" required="required" id="email" className='h-12 w-[400px] p-[10px] outline-none rounded-md'/>
                            <span>Email</span>
                        </div>
                        <div className='flex inputBox'>
                            <textarea name="message" required="required" id="" className='h-[250px] w-[400px] p-[10px] outline-none rounded-md'></textarea>
                            <span>Message</span>
                        </div>
                        <div className='flex justify-end text-black'>
                            <button className='primary-btn bg-[#F5BD02] hover:bg-white flex justify-center gap-2 shadow-[5px_5px_0px_0px_#FFFFFF] hover:shadow-[5px_5px_0px_0px_#F5BD02] w-[200px]'>Send <IoIosSend className='text-xl' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
