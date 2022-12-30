import { GetSelectCounties } from "../selects/select-counties"
import { GetDistrictInfos } from "../selects/districts-infos"
import { GetSelectStates } from "../selects/select-states/"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import * as S from "./style"

export const Main = () => {
    return (
        <S.SectionMain >
            <h1><FontAwesomeIcon icon={faMagnifyingGlass} /> Localidades IBGE</h1>
            <S.DivSelects>
                <GetSelectStates />
                <GetSelectCounties />
            </S.DivSelects>
            <S.DivInfos>
                <GetDistrictInfos />
            </S.DivInfos>
        </S.SectionMain>
    )
}