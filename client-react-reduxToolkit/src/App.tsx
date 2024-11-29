import { useEffect, useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {fetchUserAll} from './redux/slices/userSlice'
function App() {

  const dispatch = useDispatch()
  const listUser = useSelector( state => state.user.listUser)
  // const fetchUserall = async () => {
  //     try {
       
  //       setListUser(res.data ? res.data : [])
  //     } catch (error) {
  //       console.log("error",error)
  //     }
  // }

  useEffect(()=> {
    dispatch(fetchUserAll())    
  },[])

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={() =>  dispatch(decrement())}>
          count is {count}
        </button>
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button> */}
        <table aria-hidden='true'>
          <thead>
            <tr>
            <th>id</th>
            <th>email</th>
            <th>name</th>
            </tr>    
          </thead>
          <tbody>
            {
                listUser && listUser.length && listUser.map((item,index) => {
                  return(
                  <tr key={`user ${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                </tr>
                )
                })
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
