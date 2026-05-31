// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <Portfolio />
                <Contact />
            </main>

        </div>
    );
}

export default App;