import { useCollection } from '../hooks/useCollection'

import Avatar from './Avatar'

import './OnlineUsers.css'


export default function OnlineUsers() {
  const { isPending, error, documents } = useCollection('users')

  //console.log(documents);
  return (
    <div className="user-list">
      <h2>Users List</h2>
      {isPending && <div>Users loading...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(u => (
        <div key={u.id} className="user-list-item">
          {u.online  && <span className='online-user'></span>}
          <span>{u.usersName}</span>
          <Avatar src={u.fotoUrl} />
        </div>
      ))}
    </div>
  )
}

