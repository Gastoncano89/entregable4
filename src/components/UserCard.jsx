import React from 'react'

export const UserCard = ({ user, deleteUserById, setUpdateInfo, setModal }) => {

    const handleUpdate = () => {
        setUpdateInfo(user)
        setModal(true)
    }

    return (
        <article className='app__userCard'>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='app__userDataList'>
                <li><span><i className="fal fa-envelope"></i></span> {user.email}</li>
                <li><span><i className="fal fa-birthday-cake"></i></span> {user.birthday}</li>
            </ul>
            <hr />
            <div className='app__CardBtnContaier'>
                <button className='btn btn-danger'onClick={() => deleteUserById(user.id)}><i className="fal fa-trash"></i></button>
                <button className='btn btn-success' onClick={handleUpdate}><i className="fal fa-pen"></i></button>
            </div>
        </article>
    )
}
