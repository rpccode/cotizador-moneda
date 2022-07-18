import styled from '@emotion/styled'
import {useEffect,useState} from 'react'
import { monedas } from '../data/monedas';
import useSelectMonedas from '../hooks/useSelectMonedas';
import Error from './Error';

const InputSubmit= styled.input`
    background-color: #9497FF;
    border:none;
    width: 100%; 
    padding:10PX;
    color:#FFF;
    font-weight:700;
    text-transform:uppercase;
    font-size: 20px;
    border-radius: 5px; 
    transition: background-color .3s ease;
    &:hover{
        background-color:#7a7dff;
        cursor: pointer;
    }


`; 
const Formulario = ({setMonedas}) => {
  const [Criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda,SelectMonedas] = useSelectMonedas('Elije tu moneda ',monedas);
  const [cryptoMoneda,SelectCryptoMonedas] = useSelectMonedas('Elije tu Crypto Moneda ',Criptos);

  
    useEffect(() => {
        const consultarApi = async () =>{
          const url= 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

             
          const arrayCriptos = resultado.Data.map(cripto => {
              const objeto ={  
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
              }
              return objeto; 
          })
          setCriptos(arrayCriptos);
        }
        consultarApi();
    },[])

    const handleSumit = e => {
        e.preventDefault();
        if([moneda,cryptoMoneda].includes('')){
              setError(true)
              return ; 
        }
        setError(false);
        setMonedas({
          moneda,
          cryptoMoneda
        })
    }


  return ( 
  <>
      {error && <Error>Todos los campos son Obligatorios</Error>}
    <form
      onSubmit={handleSumit}
    >
      
        <SelectMonedas/>
        <SelectCryptoMonedas/>
        <InputSubmit 
            type='submit'
            value='Cotizar'
         />
    </form>
  
  
  </>
    
  )
}

export default Formulario