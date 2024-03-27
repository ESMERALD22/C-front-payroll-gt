import { Link } from 'react-router-dom';

import ImgUploader from '@/components/uploadFiles/ImgUploader';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { companyService } from '@/services/company-service';


export const RegisterCompany = () => {
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState('');
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [errors, setErrors] = useState({});
    const { register, handleSubmit } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        setSuccessMessage('');
        setErrorMessage('');

        if (imageUrl !== '' && isImageUploaded) {
            handleSubmit();
        }
    }, [imageUrl, isImageUploaded]);

    const handleImageUpload = (url) => {
        setImageUrl(url);
        setIsImageUploaded(true);
    };


    const handleValidation = (data) => {
        const newErrors = {};

        if (!data.name) {
            newErrors.name = 'Este campo es requerido';
        }

        if (!data.phone) {
            newErrors.phone = 'Este campo es requerido';
        } else if (!/^\d{8}$/.test(data.phone)) {
            newErrors.phone = 'El número de teléfono debe tener 8 dígitos';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onSubmit(data);
        }
    };
    const onSubmit = async (data) => {
        setSuccessMessage('');
        setErrorMessage('');

        console.log(data);
        try {
            const formData = { ...data, picture: "pintura" };
            console.log(formData);
            const response = await companyService.createCompany(
                formData.name,
                formData.phone,
                formData.description,
                formData.address,
                formData.picture,
                formData.email,
                formData.password
            );
            console.log(response.data);
            setSuccessMessage('La compañía se creó exitosamente.');
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setErrorMessage('Error al crear la compañía. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <>

            <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <Button variant="info"><Link to="/">Regresar</Link></Button>
                {successMessage && <span style={{ color: 'green' }}>{successMessage}</span>}
                {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
                <h1 style={{ color: 'white' }}>REGISTRO</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }}>Nombre de la compañía :</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="text" {...register('name')} />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }} >Telefono :</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="number" {...register('phone')} />
                        {errors.phone && <span>{errors.phone.message}</span>}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }}>Direccion :</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="text" {...register('description')} />
                        {errors.description && <span>{errors.description.message}</span>}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }}> Description :</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="text" {...register('address')} />
                        {errors.address && <span>{errors.address.message}</span>}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }}>Correo electronico del usuario :</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="text" {...register('email')} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }}>Contraseña:</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="password" {...register('password')} />
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ color: 'white' }} >Ingrese otra vez la contraseña :</label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input type="password" {...register('confirmPassword')} />
                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    </div>
                    <div style={{ marginBottom: '10px' }}>

                        <ImgUploader onUpload={handleImageUpload} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>

                    </div>
                    <Button type="submit">Enviar</Button>
                </form>
            </div>
        </>
    );
};
