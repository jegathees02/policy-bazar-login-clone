import React from 'react';
import Logo from '../components/logo';
import claimassistance from '../assets/claim_assistance.png';
import talkToExpert from "../assets/talk_to_expert.png";
import rating from "../assets/rating.avif";
import weDontSpam from '../assets/verified.png';
import certified from '../assets/certified.webp';
import whatsapp from "../assets/whatsapp.png";

function LoginPage() {
    return(
        <>
        {/* main div */}
        <div className='h-screen' >
            {/* division of overall grid */}
            <div className="m-auto w-[1200px] justify-center items-center ">
                {/* LOGO */}
            <div className="pt-3 flex w-full">
            <Logo />
            <div className="flex gap-10 w-full content justify-end font-normal">
                <div className=' flex gap-2 border border-[#0047B3] border-1 rounded
                w-auto h-[31px] text-center items-center px-[14px] py-0
                '>
                    <img className='h-5' src={claimassistance} />
                    <p className='flex text-[#0047B3]'>Claim Assistance</p>
                </div>
                <div className=' flex gap-2 border border-[#0047B3] border-1 rounded
                w-auto h-[31px] text-center items-center px-[14px] py-0
                '>
                    <img className='h-5' src={talkToExpert} />
                    <p className='flex text-[#0047B3]'>Talk to Expert</p>
                </div>
            </div>
            </div>
            {/* login container */}
            <div className='border border-solid rounded  border-red border-3 bg-white
            min-h-[610px]  rounded-l-[20px]'>
                {/* <h1> Hello </h1> */}
                {/* left */}
                <div className='w-[46%] float-left bg-[#0065FF] min-h-[610px] items-center overflow-hidden  rounded-l-[20px]'>
                    <div>
                        <p className='m-auto pt-[90px] w-4/5 items-center text-center font-sans text-[30px] text-white leading-[36px] font-light justify-center content-center'><span className='text-[40px] font-semibold'>₹1 Crore </span>life cover starting <em> from <span className='text-[26px] font-medium'>₹525</span>/month*</em></p>
                    </div>
                    <div>
                        <p className='mt-[16px]  pt-[4px] px-[20px] pb-[5px] w-fit m-auto text-center contents-center justify-center items-center 
                        border bg-[#C0FFCA] text-[#1f6129] rounded-[8px] text-[16px] font-normal' >Get an online discount of <span className='font-semibold'>upto 10%</span>#</p>
                    </div>
                    <div className='m-auto border rounded-[20px] bg-white min-h-[250px] w-[90%] mt-[95px]
                    top-[305px]'>
                        <p className='relative text-center font-medium text-[#253858] text-[20px] pt-[12px]'> We are rated~</p>
                        <img className='m-auto w-[215px] h-[36px] text-center mt-2' src={rating} alt='rating' />
                        {/* table */}
                        <div>
                            <table className='w-full my-[10px] text-center'>
                                <tr className='text-[22px] text-[#0047b3] font-semibold'>
                                    <th>6.7 &nbsp;<span className='text-[14px]'>Crore</span></th>
                                    <th>51</th>
                                    <th>3.4 &nbsp; <span className='text-[14px]'>Crore</span></th>
                                </tr>
                                <tr className='text-[#253858] font-normal text-[11px]'>
                                    <td>Registerd Consumers</td>
                                    <td>Insurance Partners</td>
                                    <td>Policies Sold</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <p className='m-auto text-[16px] w-[78%] text-center justify-center mt-[18px] mb-[20px] text-[#253858]'>Policybazaar is one of <span className='font-semibold'>India's leading</span> digital insurance marketplace</p>
                        </div>

                    </div>
                </div>
                {/* right */}
                <div className='w-[54%] float-right content-center items-center'>
                    <div className='m-auto w-[450px]'>
                        {/* /* radio <b</button> */}
                    <div className=' mt-[32px] flex justify-start'>
                        <input className='w-[20px] h-[20px] rounded-[60px] mr-[7px]' type='radio' value='Male' checked />
                        <label className='text-[16px] cursor-pointer'>Male</label> &nbsp; &nbsp; &nbsp;
                        <input  className='w-[20px] h-[20px] rounded-[60px] mr-[7px]' type='radio' value='Female' />
                        <label className='text-[16px] cursor-pointer'>Female</label>
                    </div>
                    <div className='border-none'>
                        <div className='mt-3'>
                        <label className='text-[12px] text-normal relative bg-white top-[9px] p-2 left-[11px] px-[4px] '>Your Name</label>
                        <input className=' focus:border-none text-[16px] h-[64px] pl-[14px] top-[-9px]  border rounded-[8px] w-full' type='text' placeholder='Enter Your Name' />
                        </div>
                        <div className='mt-3'>
                        <label  className='text-[12px] text-normal relative bg-white top-[9px] p-2 left-[11px] px-[4px] '>Date of Birth</label>
                        <input className='text-[16px] h-[64px] pl-[14px] top-[-9px]  border rounded-[8px] w-full ' type='text' placeholder='DD/MM/YYYY' />
                        </div>
                        <div className='mt-3'>
                        <label  className='text-[12px] text-normal relative bg-white top-[9px] px-2 left-[11px] '>Mobile Number</label>
                        <div className=' flex text-[16px] h-[64px] pl-[14px] top-[-9px]  border rounded-[8px] w-full '>
                            <p className='text-center pt-[17px] w-[80px]'>India</p>
                            <p className='w-[45px] pt-[17px] text-center'>+91</p>
                            <input className='pl-[25px]'  type='text' placeholder='Enter Mobile Number ' />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* we dont spam line */}
                    <div className='float-right flex h-[25px] w-[110px] mr-[105px] rounded-b-[5px] text-[11px] text-[#0047b3] items-center justify-center bg-[rgb(57,97,235,.1)]'>
                        <img className='w-[12px] h-[13px]  mr-[4px]' src={weDontSpam} alt="we dont spam" />
                        <p className='font-medium'>We don't spam</p>
                    </div>
                    <div>
                        {/* view free quotes button */}
                        <div className='flex w-full'>
                            <button className='flex bg-[#0065ff] cursor-pointer text-white h-[54px] text-center mt-[30px] mb-[5px] ml-[19%] px-[18%] pt-[13px]  font-normal text-[16px] rounded-[6px]'>View Free Quotes &nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</button>

                        </div>
                        {/* certified div */}
                        <div className='flex w-100 items-center justify-center '>
                            <img className='mr-[7px] mt-5 max-w-[35px] w-[30px] h-[27.5px]' src={certified} alt='certified' />
                            <p className='py-[15px] font-semibold items-center justify-center rounded-[12px] h-[26px] text-[#253858b3] text-[12px] '>Only certified Policybazaar expert will assist you</p>
                        </div>
                        {/* get updates div */}
                        <div className='flex w-100 items-center justify-center mt-[10px]'>
                            <img className='h-[15px] w-[15px] '  src={whatsapp} alt='whatsapp-icon' />
                            <p className='text-[#757575] text-[12px] font-normal'> Get updates on Whatsapp</p>
                        </div>
                        {/* terms and condition div */}
                        <div className='text-[12px] font-medium text-center text-[#757575] mt-[10px]'>
                            <p>By clicking,you agree to our <span className='text-[#0065ff] text-[10px] cursor-pointer'>privacy policy,Terms of Use Disclaimers</span></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='text-red-600 absolute'>
            <p>Hai</p>
        </div>
        </>
    )
}

export default LoginPage;