import { ChangeEvent, useState } from "react";
import * as C from './styles'

export const Local = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');


    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value)
    }

    return (
        <C.Container>
            <p>Meu nome é: {name}</p>
            <C.input type="text" value={name} placeholder={'Digite um nome'} onChange={handleChangeName} />
            <p>E tenho: {age} anos</p>
            <C.input type="number" value={age} placeholder={'Digite uma idade'} onChange={handleChangeAge} />
        </C.Container>
    );
};