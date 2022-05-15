import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import CatsList from './components/CatsList';
import Layout from './layout/Layout'
import Fact from './components/Fact'
import MainNavigation from './layout/MainNavigation';
import Footer from './layout/Footer'
import Pagination from './components/Pagination';


function App() {
  const [cats, setCats] = useState([]);
  const [fact, setFact] = useState({})
  const [loading, setLoading] = useState(true)
  const [currentPage,setCurrentPage] = useState(1)
  const [lastPage,setLastPage] = useState(null)
  const [factIsShow, setFactIsShow] = useState(false)
  
  //Change Page
  const paginate = async (e, pageNumber) => {
    e.preventDefault()
    console.log('pageNumber: ', pageNumber)
    setCurrentPage(pageNumber)
    const data = await fetchCats(pageNumber)
    console.log('data: ', data)
  }

  // Handler Show Fact
  const showFactHandler = () => {
    getRandomFact()
    setFactIsShow(true)
  }
  // Handler Hide Fact
  const hideFactHandler = () => {
    setFactIsShow(false)
  }

  // Fct to Get Random Fact
  const getRandomFact = async () => {
    const fact = await axios.get("https://catfact.ninja/fact")
    setFact(fact.data)
  }

  // Fct to load Cats
  const fetchCats = useCallback(async (currentPage) => {
    const response = await axios.get(`https://catfact.ninja/breeds?page=${currentPage}`)
    setCats(response.data.data)
    setLastPage(response.data.last_page)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchCats(currentPage)
  }, [currentPage, fetchCats])

  return (
    <div className="App">
      <MainNavigation />
      <Layout>
        {factIsShow && <Fact onClose={hideFactHandler} fact={fact} />}
        <CatsList cats={cats} onShow={showFactHandler} loading={loading} />
        {!loading && <Pagination currentPage={currentPage} lastPage={lastPage} paginate={paginate} /> }
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
