import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth-services';
import { Button } from '@/components/ui/button';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const menu = await authService.login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      sessionStorage.clear();
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
      <div>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
          <input type="email" placeholder="Email" {...register("email", { required: true })} style={{ marginBottom: '10px' }} />
          {errors.email && <span style={{ color: 'red' }}>Email es requerido</span>}

          <br />

          <input type="password" placeholder="Contraseña" {...register("password", { required: true })} style={{ marginBottom: '10px' }} />
          {errors.password && <span style={{ color: 'red' }}>Contraseña es requerida</span>}

          <br />

          <Button type="submit">Iniciar Sesión</Button>
        </form>
      </div>
    </div>
  );
};
