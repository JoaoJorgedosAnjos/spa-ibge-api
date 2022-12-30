import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import * as S from "./style"

function GetDistrictInfos() {
    const { infos, loading } = useSelector((info) => info.infos);

    return (
        <>{
            loading ? <S.H2>Carregando...</S.H2>
                :
                infos.map((info, index) => {
                    return (
                        <S.Ul key={index}>
                            <S.Li><span><FontAwesomeIcon icon={faLocationDot} /></span> <span>Distrito :</span>  {info.nome}</S.Li>
                            <li><span>Microrregião :</span> {info.municipio.microrregiao.nome}</li>
                            <li><span>Mesorregião : </span>{info.municipio.microrregiao.mesorregiao.nome}</li>
                            <li><span>UF : </span>{info.municipio.microrregiao.mesorregiao.UF.nome} - {info.municipio.microrregiao.mesorregiao.UF.sigla}</li>
                            <li><span>Região : </span>{info.municipio.microrregiao.mesorregiao.UF.regiao.nome}
                            </li>
                        </S.Ul>
                    )
                })}
        </>)
}

export { GetDistrictInfos }