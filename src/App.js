import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';

const App = () => {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;

  if (!apikey) {
    console.error('API key is missing. Please check your environment variables.');
  }

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="general" />} />
            <Route path='/foryou' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="general" />} />
            <Route path='/business' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="business" />} />
            <Route path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="entertainment" />} />
            <Route path='/general' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="general" />} />
            <Route path='/health' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="health" />} />
            <Route path='/science' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="science" />} />
            <Route path='/sports' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="sports" />} />
            <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey} pageSize={9} category="technology" />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
