import React, { useState } from "react";
import axios from "axios";
import BottomModal from "../bottomModal";

const CreateStudentForm = ({open, setOpen, callback}) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        nascimento: '',
        telefone: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:8089/students', formData);
            alert(response.data.message);
            setFormData({ nome: '', email: '', nascimento: '', telefone: '' });
            setOpen(false);
            callback();
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Erro ao criar aluno.");
            }
        }
    };

    return(
        <BottomModal open={open} setOpen={setOpen}>
            <h1>Cadastro de Aluno</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full my-2 px-4 justify-center">
            <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                    className="rounded-lg p-2 border border-gray-300 w-full my-2"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="rounded-lg p-2 border border-gray-300 w-full my-2"
                />
                <input
                    type="date"
                    name="nascimento"
                    value={formData.nascimento}
                    onChange={handleChange}
                    required
                    className="rounded-lg p-2 border border-gray-300 w-full my-2"
                />
                <input
                    type="text"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Telefone"
                    required
                    className="rounded-lg p-2 border border-gray-300 w-full my-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded my-2">
                    Cadastrar
                </button>
            </form>
        </BottomModal>
    )
}

export default CreateStudentForm;
