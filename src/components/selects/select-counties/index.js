import { useDispatch, useSelector } from "react-redux";
import { getInfos } from "../../../store/features/infosSlice";
import * as S from "./style"
import { customStyles } from "./style";
import Select from 'react-select'

function GetSelectCounties() {
    const { municipalities, loading } = useSelector((county) => county.municipios);

    const dispatch = useDispatch();

    function handleSelectConties(event) {
        const counties = event.value;
        dispatch(getInfos(counties));
    }

    const options = municipalities.map((county, index) => ({
        value: county.id,
        label: county.nome
    }))

    return (
        <>
            {
                loading ? <S.H2>Carregando...</S.H2>
                    :
                    <S.Div>
                        <Select onChange={handleSelectConties} options={options} placeholder="Selecione um município" styles={customStyles} noOptionsMessage={() => 'município não existe'}>
                        </Select>
                    </S.Div>
            }
        </>)
}

export { GetSelectCounties }