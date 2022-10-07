import Image from 'next/image'
import React from 'react'

const Weather = ({data}) => {
    console.log(data)

    const url = `https://openweathermap.org/img/wn`
    const icon = data.weather[0].icon

  return (
    <div className='relative z-[11] flex flex-col justify-between max-w-[500px] w-full h-[85vh] m-auto p-4 px-8 text-white'>
        {/* First */}
        <div className='relative flex justify-between items-center p-2 bg-white/10 rounded-md'>
            <div className=''>
                <Image 
                src={`${url}/${icon}@2x.png`} 
                alt='/' 
                width='100'
                height='100'
                />
                <p className='text-center text-3xl font-bold'>{data.weather[0].main}</p>
            </div>
            <p className='text-9xl font-bold'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* Bottom */}
        <div className='bg-black/50 border border-white/10 relative p-4 md:p-8 rounded-md text-center font-semibold'>
            <p className='text-xl'>Weather in {data.name}</p>
            <div className='flex justify-between'>
                <div>
                    <p className='text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p>Feels Like</p>
                </div>
                <div>
                    <p className='text-2xl'>{data.main.humidity}</p>
                    <p>Humidity</p>
                </div>
                <div>
                    <p className='text-2xl'>{data.wind.speed} MPH</p>
                    <p>Winds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather