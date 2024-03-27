import '../../index.css';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold mb-8">PayRoll Platform</h1>
        <h3>Lleva el control de tu nómina fácil, rápido y seguro!</h3>
        <div className="my-4"></div>
        <div className="flex justify-between mx-12">
          <Button><Link to='/register'>Prueba gratis</Link></Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <Button variant="info"><Link to='/dashboard'>Login</Link></Button>
      </div>
    </div>
  );
}


