import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import BookList from './Component/ListedBooks/BookList.jsx';
import Home from './Component/Home/Home.jsx';
import Details from './Component/Details/Details.jsx';
import PagesRead from './Component/PagesToRead/PagesRead.jsx';
import Comments from './Component/Comments/Comments.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Error from './Component/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/home',
        element:<Home/>,
        loader:()=>fetch('../File.json')
      },
      {
        path:'/bookList',
        element:<BookList/>,
        loader: ()=>{
          let wrap ={
            readList: localStorage.getItem('readList'),
            wishList: localStorage.getItem('wishList')
          }

          return wrap;
        }
      },
      {
        path:'/details/:bookId',
        element:<Details/>,
        loader:async({params})=>{
          let api = await fetch('../File.json');
          let data= await api.json();
          let mainData = data.find((value)=>{return value.bookId == params.bookId});

          return mainData;
        }
      },
      {
        path:'/pageRead',
        element:<PagesRead/>,
        loader: ()=>{
          return localStorage.getItem('readList');
        }
      },
      {
        path:'/comments',
        element:<Comments/>,
        loader: ()=>{
          return localStorage.getItem('readList');
        }
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
