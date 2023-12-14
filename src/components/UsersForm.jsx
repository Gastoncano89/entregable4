import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const UserForm = ({ createNewUser, updateInfo, setUpdateInfo, updateUserById, Modal, setModal }) => {
    
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const cleanValues = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

    const submit = data => {
        if(updateInfo){
            updateUserById(updateInfo.id, data)
        }
        else {
            createNewUser(data)
        }
        reset(cleanValues)
    }

    const handleOpenModal = () => {
        setModal(true)
        setUpdateInfo()
        reset(cleanValues)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    return (
        <>

            <button className='btn .btn-create' onClick={handleOpenModal}><i className="fal fa-plus-circle"></i> Create user</button>
            
            <form className={Modal ? 'app__form Modal__active' : 'app__form'} onSubmit={handleSubmit(submit)}>
                <div className='app__formContainer'>
                    <div className='app_formTitle'>
                        <h2>{ updateInfo ? 'Update' : 'New'} User</h2>
                        <i className="icon-close fal fa-times" onClick={handleCloseModal}></i>
                    </div>
                    <div className='app__formItems'>
                        <div className='app__formFieldCouple'>
                            <i className="fal fa-user"></i>
                            <input {...register('first_name')} type="text" id='firstName' placeholder='First name' />
                            <input {...register('last_name')} type="text" id='lastName' placeholder='Last name' />
                        </div>
                        <div className='app__formField'>
                            <i className="fal fa-envelope"></i>
                            <input {...register('email')} type="email" id='email' placeholder='Email' />
                        </div>
                        <div className='app__formField'>
                            <i className="fal fa-lock"></i>
                            <input {...register('password')} type="password" id='password' placeholder='Password' />
                        </div>
                        <div className='app__formField'>
                            <i className="fal fa-birthday-cake"></i>
                            <input {...register('birthday')} type="date" id='birthday' />
                        </div>
                        <button className='btn btn-create' onClick={handleCloseModal}>{ updateInfo ? 'Update' : 'Create'} user</button>
                    </div>
                </div>
            </form>
        </>
    )
}
