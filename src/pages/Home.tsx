import Main from '../components/Main'
import Row from '../components/Row'
import { TheMovieDBOptions, TheMovieDBRequests } from '../requests/request'

const Home = () => {
    return (
        <>
            <Main />
            <Row id='1' title="Upcoming" fetchURL={TheMovieDBRequests.requestUpcoming} fetchOptions={TheMovieDBOptions} />
            <Row id='2' title="Popular" fetchURL={TheMovieDBRequests.requestPopular} fetchOptions={TheMovieDBOptions} />
            <Row id='3' title="Trending" fetchURL={TheMovieDBRequests.requestTrending} fetchOptions={TheMovieDBOptions} />
            <Row id='4' title="Top Rated" fetchURL={TheMovieDBRequests.requestTopRated} fetchOptions={TheMovieDBOptions} />
            <Row id='5' title="Horror" fetchURL={TheMovieDBRequests.requestHorror} fetchOptions={TheMovieDBOptions} />
        </>
    )
}

export default Home