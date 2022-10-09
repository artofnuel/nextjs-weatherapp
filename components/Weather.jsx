import Image from 'next/image'
import React from 'react'

const Weather = ({ data }) => {
    console.log(data)

    const url = `https://openweathermap.org/img/wn`
    const icon = data.weather[0].icon
    const locale = data.name
    const condition = data.weather[0].main
    const temp = data.main.temp.toFixed(0)
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed

    return (
        <div className='relative z-[11] flex flex-col justify-evenly max-w-[500px] w-full h-[600px] m-auto p-4 px-8 text-white'>
            {/* First */}
            <div className='relative flex justify-between items-center p-2 bg-[#0a0510]/30 border-4 border-[#0a0510]/70 rounded-md transition-all hover:scale-105 duration-500'>
                <div className=''>
                    <Image
                        src={`${url}/${icon}@2x.png`}
                        alt='/'
                        width='100'
                        height='100'
                    />
                    <p className='text-center text-3xl font-bold'>{condition}</p>
                </div>
                <p className='text-7xl font-bold'>{temp}&#176;c</p>
            </div>
            {/* Bottom */}
            <div className='bg-[#0a0510]/70 border border-white/10 relative p-4 md:p-8 rounded-md text-center font-semibold transition-all hover:scale-105 duration-500'>
                <p className='text-xl'>Weather in {locale}</p>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-2xl'>{temp}&#176;c</p>
                        <p>Feels Like</p>
                    </div>
                    <div>
                        <p className='text-2xl'>{humidity}</p>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <p className='text-2xl'>{windSpeed} MPH</p>
                        <p>Winds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather