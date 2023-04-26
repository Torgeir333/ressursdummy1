
// brukes til å navigere mellom sider i app

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
        <span onClick={() => navigate('/ressurs1/')}>[ 5 ]</span> 
        <span onClick={() => navigate('/ressurs2/')}>[ 6 ]</span> 
        <span onClick={() => navigate('/ressurstilgang1/')}>[ 7 ]</span>   
    </p>
    )
}
