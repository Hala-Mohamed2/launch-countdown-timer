import { useEffect } from "react";
import { useState } from "react"
import { DiDart } from "react-icons/di";


export default function Counter() {

    const [count , setCount] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect (()=> {

        let countDown = new Date("March 30, 2026 12:24:22").getTime();

        const counter = setInterval(() => {
            
            const dateNow = new Date().getTime();
            const dateDiff = countDown - dateNow

            if(dateDiff <= 0){
                clearInterval(counter)
            }

            setCount({
                days: Math.floor(dateDiff /(1000 * 60 * 60 * 24)),
                hours: Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                minutes: Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60 )),
                seconds: Math.floor(dateDiff % (1000 * 60  ) / (1000  )),
            })


        }, 1000);

        return ()=> clearInterval(counter)

    }, [])




return (
    <div className="text-center">
        <div>
            <h1 className="uppercase text-white font-bold tracking-[6px] pt-9">We're launching soon</h1>
        </div>

        <div className="flex sm:flex-row gap-4 sm:gap-8 py-10 sm:py-19 justify-center items-center">
            <div className="timer-bomx relative">
                <h2 className="bg-[hsl(236,21%,26%)] text-red-400 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center text-2xl sm:text-4xl font-bold rounded-sm">{count.days}</h2>
                <span className="text-gray-400 uppercase tracking-[4px] text-[9px] md:text-[11px] font-bold ">days</span>
            </div>
            <div className="timer-bomx relative">
                <h2 className="bg-[hsl(236,21%,26%)] text-red-400 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center text-2xl sm:text-4xl font-bold rounded-sm">{count.hours}</h2>
                <span className="text-gray-400 uppercase tracking-[4px] text-[9px] md:text-[11px] font-bold ">hours</span>
            </div>
            <div className="timer-bomx relative">
                <h2 className="bg-[hsl(236,21%,26%)] text-red-400 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center ttext-2xl sm:text-4xl font-bold rounded-sm">{count.minutes}</h2>
                <span className="text-gray-400 uppercase tracking-[4px] text-[9px] md:text-[11px] font-bold ">minutes</span>
            </div>
            <div className="timer-bomx relative">
                <h2 className="bg-[hsl(236,21%,26%)] text-red-400 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center text-2xl sm:text-4xl font-bold rounded-sm">{count.seconds}</h2>
                <span className="text-gray-400 uppercase tracking-[4px] text-[9px] md:text-[11px] font-bold ">seconds</span>
            </div>
        </div>

        <div className="flex gap-6 justify-center items-center mt-12 md:mt-29">
            <img src="./images/icon-facebook.svg" alt="" />
            <img src="./images/icon-instagram.svg" alt="" />
            <img src="./images/icon-pinterest.svg" alt="" />
        </div>


    </div>
)
}
