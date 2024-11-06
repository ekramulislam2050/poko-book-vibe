import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { storedToList } from '../../addToListBD/addToListBD';
import Book from '../Book/Book';

const ListBooks = () => {
  const [allReadList, setAllReadList] = useState([])
  const allData = useLoaderData()
  // console.log(allData)
  useEffect(() => {
    const readBooksList = storedToList()
    const storedBookId = readBooksList.map(bookId => parseInt(bookId))
    const allReadList = allData.filter(book => storedBookId.includes(book.bookId))
    // console.log(readBooksList,storedBookId,allReadList)
    setAllReadList(allReadList)

  }, [])
      const [sort,setSort] = useState('')
      const handleSort=( sortType)=>{
           setSort(sortType)
         if(sortType === "Sort by pages"){
          const sortByPages = [...allReadList].sort((a,b)=>a.totalPages - b.totalPages)
          setAllReadList(sortByPages)
         }
         if(sortType === "sort by rating"){
            const sortByRating = [...allReadList].sort((a,b)=>a.rating - b.rating)
            setAllReadList(sortByRating)
         }
      }

  return (
    <div>
      <h3 className="text-3xl">listed Books</h3>
      <details className="dropdown">
        <summary className="m-1 btn">{sort?`sort by:${sort}`:"sort by"}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=>handleSort("Sort by pages")}><a>Sort by pages</a></li>
          <li onClick={()=>handleSort("sort by rating")}><a>sort by rating</a></li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books i read:{allReadList.length}</h2>
          {
            allReadList.map((book) => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListBooks;