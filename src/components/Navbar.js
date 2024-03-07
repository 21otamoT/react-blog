import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({isAuth}) => {
  return (
    <nav>
      <Link to='/'><FontAwesomeIcon icon={faHouse} />ホーム</Link>
      {!isAuth ? (
        <Link to='/login'><FontAwesomeIcon icon={faRightToBracket} />ログイン</Link>
      ) : (
        <span>
          <Link to='/logout'><FontAwesomeIcon icon={faRightToBracket} />ログアウト</Link>
          <Link to='/createpost'><FontAwesomeIcon icon={faFilePen}/>記事投稿</Link>
        </span>
      )}
    </nav>
  )
}

export default Navbar