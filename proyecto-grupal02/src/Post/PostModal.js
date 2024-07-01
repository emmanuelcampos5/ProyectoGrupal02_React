import api from '../misc/api.js';
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, ModalFooter, Input, Label, Alert  } from 'reactstrap';


const PostModal = ({isOpen, toggleModal, onUpdate, postEditar, isEditar}) => {
    const [ titulo, setTitulo ] = useState('') ;
    const [ texto, setTexto ] = useState('') ;
    const [ imagen, setImagen ] = useState('') ;
    const [ fecha, setFecha ] = useState(Date.now) ;
    const [ error, setError ] = useState('') ;

    
    const getActualDate = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        // Formatear la fecha en YYYY-MM-DD
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    useEffect( () => {
        if (postEditar){
            setTitulo(postEditar.tituloPost);
            setTexto(postEditar.textoPost);
            setImagen(postEditar.imagenPost);
            setFecha(postEditar.fechaPublicacion);
        } else {
            cleanData()
        }
    }, [postEditar]);
    
    const handleSubmit = async () => {
        try {
            if (titulo.trim() == '') {
                throw new Error("Titulo requerido")
            }
            if (texto.trim() == '') {
                throw new Error("Descripcion requerida")
            }
            if (imagen.trim() == '') {
                throw new Error("URL de la imagen requerida")
            }
            let data = {
                "tituloPost": titulo,
                "textoPost": texto,
                "imagenPost": imagen,
                "fechaPublicacion": fecha,
                "idCategoria": 10,
                "idUsuario": 22
            }
            if (isEditar) {
                data.idPost = postEditar.idPost
                await api.Post.update(data);
            } else {
                await api.Post.create(data);
            }
            
            cleanData();
            toggleModal();
            onUpdate();
        } catch (error) {
            setError(error.message)
        }

    }

    const cleanData = () =>{
        setTitulo('') ;
        setTexto('') ;
        setImagen('') ;
        setError('');
        setFecha(getActualDate()) ;
    }



    return ( 

    
        <Modal isOpen={isOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>
                    {isEditar ? 'Editar' : 'Insertar'} Curso
              </ModalHeader>
              <ModalBody>
                {
                    error &&
                    <Alert color='danger'>
                        {error}
                    </Alert>
                }
                <Form>
                    <FormGroup>
                        <Label for="titulo">Titulo</Label>
                        <Input required type="text" id="nombre" value={titulo} onChange={(e) => setTitulo(e.target.value)} ></Input>

                        <Label for="descripcion">Descripcion</Label>
                        <Input required type="text" id="descripcion" value={texto} onChange={(e) => setTexto(e.target.value)} ></Input>

                        <Label for="imagen">URL Imagen</Label>
                        <Input required type="text" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} ></Input>                                                                 
                    </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleSubmit} >
                        {isEditar ? 'Editar' : 'Insertar'}
                    </Button>{' '}
                <Button color="secondary" onClick={toggleModal} >Cancelar</Button>
            </ModalFooter>
            </Modal>
                
        

     );
}

export default PostModal;
