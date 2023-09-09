import React from 'react'

function insert() {
  return (
    <div className='flex items-center text-center bg-[url("./assets/bg1.jpeg")] bg-no-repeat bg-center bg-cover h-[100vh] m-0 p-0 justify-center box-border font-serif '>
            <div className="w-[521px] px-[30px] py-[10px] bg-[rgba(247,179,179,0.46)] rounded-[10px] ">
            <div className="text-[33px] font-semibold mb-[35px] mt-[10px] text-[#0a0a0a]">
                Add Record
            </div>
            <form action="#">
                    
                    <div className=" h-[40px] w-full flex relative">
                        <input className='h-full w-full p-[20px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                            onFocus={
                                (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                            }
                            onBlur={
                                (e) => {
                                    if (!e.target.value) {
                                        e.target.parentNode.querySelector('label').classList.remove('hidden');
                                    }
                                }
                            }
                            type="text"
                            required/>
                        <label className='absolute top-2/4 transform -translate-y-1/2 left-[20px] pointer-events-none text-[#666666] text-[18px] '>Category</label>
                    </div>
                <br/>
                <div className=" h-[40px] w-full flex relative">
                    <input className='h-full w-full p-[20px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                        onFocus={
                            (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                        }
                        onBlur={
                            (e) => {
                                if (!e.target.value) {
                                    e.target.parentNode.querySelector('label').classList.remove('hidden');
                                }
                            }
                        }
                        type="text"
                        required/>
                    <label className='absolute top-2/4 transform -translate-y-1/2 left-[20px] pointer-events-none text-[#666666] text-[18px]'>Name</label>
                </div><br/>
                <div className=" h-[40px] w-full flex relative">
                    <input className='h-full w-full p-[20px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                        onFocus={
                            (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                        }
                        onBlur={
                            (e) => {
                                if (!e.target.value) {
                                    e.target.parentNode.querySelector('label').classList.remove('hidden');
                                }
                            }
                        }
                        type="number"
                        required/>
                    <label className='absolute top-2/4 transform -translate-y-1/2 left-[20px] pointer-events-none text-[#666666] text-[18px]'>Price</label>
                </div>
                <br/>
                    <div className=" h-[40px] w-full flex relative">
                        <input className='h-full w-full p-[20px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm '
                            onFocus={
                                (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                            }
                            onBlur={
                                (e) => {
                                    if (!e.target.value) {
                                        e.target.parentNode.querySelector('label').classList.remove('hidden');
                                    }
                                }
                            }
                            type="text"
                            required/>
                        <label className='absolute top-2/4 transform -translate-y-1/2 left-[20px] pointer-events-none text-[#666666] text-[18px]'>Content</label>
                    </div><br />
                    <div className=" h-[40px] w-full flex relative bg-white rounded-[25px]">
                        <label className='pointer-events-nonn  text-[#595959]  text-[20px] pt-1 font-medium pl-[20px] '>Image</label>
                        <input className=' h-full w-full pl-[60px] pt-1 outline-[none] border-none text-lg focus:shadow-sm'
                            type="file"
                            required/>
                    </div>
                <button className='mx-[0] my-[15px] w-full h-[50px] text-lg leading-[50px] font-semibold rounded-[25px] border-none outline-[none] cursor-pointer [box-shadow:2px_2px_5px_#BABECC,_-5px_-5px_10px_#ffffff73]  bg-black text-red-300  focus:text-[#fa6363]  focus:[box-shadow:inset_2px_2px_5px_#BABECC,]
                                                     inset -5px -5px 10px #ffffff73;'>ADD</button>
                
            </form>
        </div>
        </div>
  )
}

export default insert
