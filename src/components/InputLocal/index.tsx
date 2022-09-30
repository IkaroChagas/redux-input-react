import React, { ChangeEvent, useState } from "react";
import * as C from './styles'

export const Local = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');


    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? Number(e.target.value) : null;
        if (!value) {
            setAge(e.target.value);
        } else {
            if (value > 0 && value < 130) {
                setAge(e.target.value);
            }
        }
    }

    return (
        <C.Container>
            <h2>Estado local</h2>
            <C.p>Nome: {name}</C.p>
            <C.input type="text" value={name} placeholder={'Digite um nome'} onChange={handleChangeName} />
            <C.p>Idade: {age}</C.p>
            <C.input type="number" value={age} placeholder={'Digite uma idade'} onChange={handleChangeAge} />
        </C.Container>
    );
};
