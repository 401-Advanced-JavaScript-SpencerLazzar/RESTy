import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav className='Nav'>
        <Header />
      </nav>
      <body className='Body'>
        <Form />
      </body>
      <footer className='Footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
