import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStates } from "../../../store/features/statesSlice";
import { getMunicipalities } from "../../../store/features/countySlice";
import * as S from "../select-counties/style"
import { customStyles } from "../select-counties/style"
import Select from 'react-select'

function GetSelectStates() {
    const { states, loading } = useSelector((state) => state.estados);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStates())
    }, [dispatch])

    function handleSelectUf(event) {
        const uf = event.value;
        dispatch(getMunicipalities(uf))
    }

    const options = states.map((state) => ({
        value: state.id,
        label: state.nome,
    }))

    return (
        <>
            {loading ? <S.H2>Carregando...</S.H2> :
                <S.Div>
                    <Select styles={customStyles} onChange={handleSelectUf} options={options} color="red" placeholder="Selecione um estado"noOptionsMessage={() => 'estado não existe'} >
                    </Select>
                </S.Div>
            }
        </>
    )
}

export { GetSelectStates }