import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div>
        <nav className='w-50 mt-3 mx-auto'>
            <ul className='d-flex justify-content-around space-between text-dark'>
            <button class='bg-danger '> 
                <Link to="/posts" className='text-decoration-none text-dark'>Posts</Link>
            </button>
            <button class='bg-success'>
                <Link to="/comments" className='text-decoration-none text-dark'>Comments</Link>
            </button>
            <button class='bg-warning text-secondary'>
                <Link to="/album" className='text-decoration-none text-dark'>Album</Link>
            </button>
            <button class='bg-secondary '>
                <Link to="/todo" className='text-decoration-none text-white'>Todo</Link>
            </button>
            <button class='bg-dark '>
                <Link to="/photos" className='text-decoration-none text-white'>Photos</Link>
            </button>
            <button class='bg-dark '>
                <Link to="/postmethod" className='text-decoration-none text-white'>Post Method</Link>
            </button>
            <button class='bg-dark '>
                <Link to="/getpost" className='text-decoration-none text-white'>Get Post Method</Link>
            </button>

            <button class='bg-dark '>
                <Link to="/newsapi" className='text-decoration-none text-white'>News API</Link>
            </button>

            <button class='bg-dark '>
                <Link to="/putdelete" className='text-decoration-none text-white'>Put Delete Method</Link>
            </button>
            <button class='bg-dark '>
                <Link to="/a" className='text-decoration-none text-white'>A component</Link>
            </button>
            <button class='bg-dark '>
                <Link to="/b" className='text-decoration-none text-white'>B component</Link>
            </button>
            </ul>

           
        </nav>
<Outlet />
    </div>
    </>
  )
}

export default Layout