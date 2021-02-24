import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import Joke from '../components/Joke';
import Topbar from '../components/Topbar';
import NavBar from 'react-bootstrap/NavBar'
import Pagination from "react-bootstrap-4-pagination"
export async function getServerSideProps(context) {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  const searchTerm = context.query.term || ''
  const page = context.query.page || '1'

  const url = `https://icanhazdadjoke.com/search?term=${searchTerm}&page=${page}`
  const result = await axios.get(url,config);
  return {
    props: {
      response: JSON.stringify(result.data),
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  const response = JSON.parse(props.response);
  const jokes = response.results
  const searchTerm = response.search_term

  const paginationConfig = {
    totalPages: response.total_pages,
    currentPage: response.current_page,
    prevNext: true,
    threeDots: true,
    showMax: 5,
    href: `?term=${searchTerm}&page=*`,
    pageOneHref: `?term=${searchTerm}`
  };

  return (
    <Container>
      <Topbar searchTerm={searchTerm}></Topbar>
      
      {
      jokes.map(
        joke => 
          <Joke key={joke.id} joke={joke.joke}></Joke>
      )
      }
    <Pagination {...paginationConfig}/>
    </Container>

  )
}
