import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { setAge, setName } from '../../redux/reducers/userReducer';
import * as C from './styles'

export const Global = () => {
    const dispatch = useDispatch()

    const user = useAppSelector(state => state.user)

    const changeName = (newName: string) => dispatch(setName(newName))
    const changeAge = (newAge: number) => dispatch(setAge(newAge))


    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeName(e.target.value)
    }

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeAge(parseInt(e.target.value))
    }


    return (

        <C.Container>
            Meu nome é: {user.name} e tenho {user.age} anos <br />
            <br />
            <C.input type="text" value={user.name} placeholder={'Digite um nome'} onChange={handleChangeName} />
            <br />
            <C.input type="number" value={user.age} placeholder={'Digite uma idade'} onChange={handleChangeAge} />
        </C.Container>
    );

}
