import React from 'react'
import s from './ProfilePage.module.scss'

function ProfilePage() {
  return (
    <div className={s.profilePage}>
      <div>История полетов</div>
      <div className={s.profileInfo}>
        <div>Откуда</div>
        <div>Куда</div>
      </div>
    </div>    
  )
}

export default ProfilePage;