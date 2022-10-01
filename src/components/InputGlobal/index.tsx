import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { setAge, setName } from '../../redux/reducers/userReducer';
import * as C from './styles'


export const Global = () => {
    const dispatch = useDispatch()

    const user = useAppSelector(state => state.user)

    const changeName = (newName: string) => dispatch(setName(newName))
    const changeAge = (newAge: any) => dispatch(setAge(newAge))

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeName(e.target.value)
    }

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? Number(e.target.value) : null;
        if (!value) {
            changeAge(value)
        } else {
            if (value > 0 && value < 130) {
                changeAge(value)
            }
        }
    }

    return (
        <C.Container>
            <h2>Estado global (Redux)</h2>
            <C.p>Nome: {user.name}</C.p>
            <C.input type="text" value={user.name} placeholder={'Digite um nome'} onChange={handleChangeName} />
            <C.p>Idade: {user.age}</C.p>
            <C.input type="number" value={user.age} placeholder={'Digite uma idade'} onChange={handleChangeAge} />
        </C.Container>
    );

}
