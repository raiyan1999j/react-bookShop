import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookList from './Component/ListedBooks/BookList.jsx';
import Home from './Component/Home/Home.jsx';
import Details from './Component/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('../public/File.json')
      },
      {
        path:'/bookList',
        element:<BookList/>
      },
      {
        path:'/details/:bookId',
        element:<Details/>,
        loader:async({params})=>{
          let api = await fetch('../public/File.json');
          let data= await api.json();
          let mainData = data.find((value)=>{return value.bookId == params.bookId});

          return mainData;
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
