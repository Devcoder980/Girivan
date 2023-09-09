import React from 'react'

const update = () => {
  return (
    <div className=' flex justify-center items-center text-center bg-[url("./assets/bg1.jpeg")] bg-no-repeat bg-center bg-cover h-[100vh] m-0 p-0  box-border font-serif '>
    <div className="w-[400px] px-[30px] py-[10px] bg-[rgba(247,179,179,0.46)] rounded-[10px] ">
    <div className="text-[33px] font-semibold mb-[35px] mt-[10px] text-[#0a0a0a]">
        Update Record
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
            </div>
        <button className='mx-[0] my-[15px] w-full h-[50px] text-lg leading-[50px] font-semibold rounded-[25px] border-none outline-[none] cursor-pointer [box-shadow:2px_2px_5px_#BABECC,_-5px_-5px_10px_#ffffff73] bg-black text-red-300  focus:text-[#fa6363]  focus:[box-shadow:inset_2px_2px_5px_#BABECC,]
                                             inset -5px -5px 10px #ffffff73;'>UPDATE</button>
        
    </form>
</div>
</div>
  )
}

export default update
