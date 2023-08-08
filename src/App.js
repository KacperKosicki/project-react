import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Container>
          <Hero />
          <SearchForm />
          <List />
        </Container>
      </main>
    </Router>
  );
};

export default App;
