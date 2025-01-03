import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';



function App() {
    return (
        <Router>
            <div>
                <nav className="bg-gray-800 p-4">
                    <div className="container mc-auto flex justify-between">
                        <a href="/" className="text-white font-bold">Heat🔥Content</a>
                        <div className="space-x-4">
                            <a href="/terms" className="text-white">Terms</a>
                            <a href="/privacy" className="text-white">Privacy</a>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;