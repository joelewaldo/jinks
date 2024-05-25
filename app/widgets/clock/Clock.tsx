"use client"
import { useEffect, useState } from "react";
import moment from "moment";

export default function Clock() {
    const [currentTime, setCurrentTime] = useState('')
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format('hh:mm:ss A'))
        }, 1000)
        
        return () => clearTimeout(intervalId)
    }, [])

    return (
        <div id="Clock">
            {currentTime} 
        </div>
    )
}
