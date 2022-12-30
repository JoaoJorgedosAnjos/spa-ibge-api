import * as S from "./style"
import Logo from "../img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return (
        <S.Container>
            <img src={Logo} alt="IBGE logo" />
            <div>
                <h2><FontAwesomeIcon icon={faEarthAmericas} /></h2>
                <h2>Instituto Brasileiro de Geografia e Estatística </h2>
            </div>
        </S.Container>
    )
}