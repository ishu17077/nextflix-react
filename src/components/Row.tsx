import type { AxiosRequestConfig } from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Movie from './Movie'




const Row = ({ id, title, fetchURL, fetchOptions }: { id: string, title: string, fetchURL: string, fetchOptions: AxiosRequestConfig }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL, fetchOptions).then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL, fetchOptions])

    const slideLeft = () => {
        const slider = document.getElementById('slider-' + id)
        slider!.scrollLeft = slider!.scrollLeft - 500
    }

    const slideRight = () => {
        const slider = document.getElementById('slider-' +id)
        slider!.scrollLeft = slider!.scrollLeft + 500
    }
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center justify-between group'>
                <MdChevronLeft className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block' size={40} onClick={slideLeft} />
                <div id={`slider-${id}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative'>
                    {movies.map((movie, id) =>
                        <Movie key={id} movie={movie} />
                    )}

                </div>
                <MdChevronRight className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:block' size={40} onClick={slideRight} />
            </div>
        </>
    )
}

export default Row