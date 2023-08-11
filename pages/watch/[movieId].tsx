import React, { useEffect } from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";

import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
    const router = useRouter()
    const { movieId } = router.query

    const { data } = useMovie(movieId as string)



    console.log(data)

    return ( 
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70">
                <AiOutlineArrowLeft 
                onClick={() => router.push('/')}
                className='text-white cursor-pointer' size={40}/>
                <p className="text-white text-xl md:text-3xl font-bold "><span className="font-light text-white">Watching </span>{data?.title}</p>
            </nav>
            <video 
            controls
            autoPlay
            src={data?.videoUrl}></video>
        </div> 
    );
}
 
export default Watch;