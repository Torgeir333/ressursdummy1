
// brukes til å navigere mellom sider,
// spesielt når jeg nå lager side 4 er det
// på tide å dra kode ut til egen komponent

import { useNavigate } from 'react-router-dom'; 

export const NavigeringsKomponent = () => {
    const navigate = useNavigate(); 
    return (
        <p> 
        Naviger sider:  
        <span onClick={() => navigate('/')}> [ 1 ]</span>  
        <span onClick={() => navigate('/andreside/')}>[ 2 ]</span> 
        <span onClick={() => navigate('/minidashboard/')}>[ 3 ]</span> 
        <span onClick={() => navigate('/queryside/')}>[ 4 ]</span> 
    </p>
    )
}
