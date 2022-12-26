import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStates } from "../../store/features/statesSlice";
import { getMunicipalities } from "../../store/features/countySlice";


function State2() {

    const [selectedUf, setSelectedUf] = useState("0");
    const [selectedCounty, setSelectedCounty] = useState("0");
    const { states, loading } = useSelector((state) => state.estado)
    const { municipalities } = useSelector ((county)=> county.municipio)
   //console.log(municipalities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStates())
        setSelectedCounty("0")
    },[])

    useEffect(() => {
        dispatch(getMunicipalities(selectedUf))
    }, [selectedUf])

    function handleSelectUf(event) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(event) {
        const county = event.target.value;
        setSelectedCounty(county);
      }

    return (
        <div>
            <label>Filter</label>
            <select onChange={handleSelectUf}>
                <option value="0">Selecione a UF</option>
                {states.map((state, index) =>
                    (<option key={index} value={state.sigla}>
                         {state.nome} - {state.sigla}</option>)
                )}

            </select>

            <label>Filter</label>

            <select onChange={handleSelectCity} value={selectedCounty}>

                <option  value="0" >Selecione o municipio</option>
                    {municipalities.map((county, index)=>
                    (<option key={index} >{county.nome}</option>)
                    )}
                

            </select>

        </div>
    )
}



export { State2 }