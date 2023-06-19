import React from 'react'
import s from './Popular.module.scss'

function Popular() {
  return (
    <div className={s.popular}>
      <div className={s.container}>
        <div>Популярные направления</div>
        <div className={s.images}>
          <div>
            <img className={s.image} src="https://img.freepik.com/free-photo/black-dragon-pool-in-lijiang-yunnan-china_649448-2701.jpg?w=1060&t=st=1687160161~exp=1687160761~hmac=ed56fe58fec47e5ed0f519a85edb25ad470f180cb3a0479226bfd45073f3e82c" alt="" />
            <div>Китай</div>
          </div>
          <div>
            <img className={s.image} src="https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>Италия</div>
          </div>
          <div>
            <img className={s.image} src="https://images.pexels.com/photos/2291340/pexels-photo-2291340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>Греция</div>
          </div>
          <div>
            <img className={s.image} src="https://images.pexels.com/photos/5116646/pexels-photo-5116646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>Германия</div>
          </div>
          <div>
            <img className={s.image} src="https://images.pexels.com/photos/10967302/pexels-photo-10967302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>Финляндия</div>
          </div>
          <div>
            <img className={s.image} src="https://images.pexels.com/photos/15203321/pexels-photo-15203321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>Москва</div>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Popular