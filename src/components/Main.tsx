import { useEffect, useState } from 'react'
import { TheMovieDBOptions, TheMovieDBRequests } from '../requests/request'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(TheMovieDBRequests.requestPopular, TheMovieDBOptions).then((res) => {
            setMovies(res.data.results)
            setMovie(res.data.results[Math.floor(Math.random() * movies.length)])

        })
    }, [])

    const truncateString = (str: string, num: number) => {
        if (str.length > num && num > 0) {
            return str.slice(0, num) + "..."
        } else {
            return str
        }
    }

    return (
        <div className='w-full h-[550px] text-white'>

            <div className='h-full w-full'>
                <div className='absolute w-full h-[550px] bg-linear-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            </div>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div>
                    <button className='border bg-gray-300 text-black py-2 px-5 '>Play</button>
                    <button className='border text-white py-2 px-5 ml-4'>Watch Now</button>
                </div>
                <p className='text-gray-400 text-sm pt-2'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(`${movie?.overview}`, 150)}</p>
            </div>
        </div>
    )
}

export default Main