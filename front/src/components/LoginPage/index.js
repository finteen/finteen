import React from 'react';
import LogInForm from '../LogInForm/index';

const handleSubmit = values => values;

const LoginPage = () => <LogInForm onSubmit={handleSubmit} />;


export default LoginPage;
