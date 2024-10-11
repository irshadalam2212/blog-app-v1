import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';

function App() {

  const { fetchBlogData } = useContext(AppContext)

  useEffect(() => {
    //fetching initial blog post data
    fetchBlogData();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="my-[100px]">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
