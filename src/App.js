import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const  App=()=> {
const [Progress,setProgress]= useState(0)
 const  ApiKey = process.env.REACT_APP_NEWS_API_KEY;
      return (
      <Router>
        <div>
          <LoadingBar
            height={4}
            color='#dc2626'
            progress={Progress}
          />
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} ApiKey={ApiKey} key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path='/' element={<News setProgress={setProgress} ApiKey={ ApiKey} key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path='/Business' element={<News setProgress={setProgress} ApiKey={ ApiKey} key="Business" pageSize={5} country="in" category="Business" />} />
            <Route exact path='/Entertainment' element={<News setProgress={setProgress} ApiKey={ ApiKey} key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />
            <Route exact path='/Health' element={<News setProgress={ setProgress} ApiKey={ ApiKey} key="Health" pageSize={5} country="in" category="Health" />} />
            <Route exact path='/Science' element={<News setProgress={ setProgress} ApiKey={ ApiKey} key="Science" pageSize={5} country="in" category="Science" />} />
            <Route exact path='/Sports' element={<News setProgress={ setProgress} ApiKey={ ApiKey} key="Sports" pageSize={5} country="in" category="Sports" />} />
            <Route exact path='/Technology' element={<News setProgress={ setProgress} ApiKey={ ApiKey} key="Technology" pageSize={5} country="in" category="Technology" />} />
          </Routes>
        </div>
      </Router>
    )
}

export default App
