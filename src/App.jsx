import { useEffect, useState } from 'react'
import './App.css'
import { UserForm } from './components/UsersForm'
import { UserCard } from './components/UserCard'
import useCrud from './services/useCrud'
import background from "./img/background.jpg";



function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [Modal, setModal] = useState(false)

  const {
    users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById
  } = useCrud()  

  useEffect(() => {
    getAllUsers()
  }, [])
  
  
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className='app__navbar'>
        <UserForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}  
          setUpdateInfo={setUpdateInfo}
          updateUserById={updateUserById}
          Modal={Modal}
          setModal={setModal}
        />        
      </div>
      <div className='app__UsersCotainer'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              updateUserById={updateUserById}
              setModal={setModal}
            />
          ))
        }
      </div>
     
    </div>
  )
}

export default App
