import api from '../misc/api.js';
import React, { useState, useEffect } from "react";
import PostModal from './PostModal.js';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, ModalFooter, Input, Label, Alert  } from 'reactstrap';

const PostLista = () => {
    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [postEditar, setPostEditar] = useState({});
    const [isEditar, setIsEditar] = useState(false);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [ postDelete, setPostDelete ] = useState(null);

    const fetchPosts = () => {
        try {
            api.Post
                .getAll()
                .then(data => {
                    setPosts(data)
                    console.log(posts)
                })
                .catch(e => {
                    console.error(e)
                })
        } catch (e) {
            console.error(e)
        }
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const toggleEditModal = (post) => {
        setPostEditar(post);
        if (post) {
            setIsEditar(true);
        }
        else {
            setIsEditar(false);
        }

        setModalOpen(true);
    }

    const toggleDeleteModal = (post) => {
        setPostDelete(post);
        setModalDeleteOpen(!modalDeleteOpen);
    };

    const handlePostDelete = () => {
        try {
            api.Post.delete({idPost: postDelete.idPost})
            toggleDeleteModal()
            fetchPosts()
        } catch (e) {
            console.error(e)
        }

    }


    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div className='row d-flex justify-content-center'>
            <div className='d-flex justify-content-end'>
                <button className='btn btn btn-primary' onClick={() => toggleEditModal(null)}>Crear Publicacion</button>
            </div>
            {posts.map(p => (
                <div className="card mb-4" key={p.idPost}>
                    <img src={p.imagenPost} className="card-img-top mt-3" alt="..."></img>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{p.tituloPost}</h5>
                        <div className="card-text-container mb-4">
                            <p className="card-text">{p.textoPost}</p>
                        </div>
                        <div className='botones mt-auto'>
                            <button href="#" className="btn btn-primary" onClick={() => toggleEditModal(p)}>Editar</button>
                            <button href="#" className="btn btn-danger" onClick={() => toggleDeleteModal(p)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Modal de editar */}
            <PostModal
                isOpen={modalOpen}
                toggleModal={toggleModal}
                onUpdate={fetchPosts}
                postEditar={postEditar}
                isEditar={isEditar}
            />

            {/* Modal de eliminar */}
            <Modal isOpen={modalDeleteOpen} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal}>
                    Eliminar Post
                </ModalHeader>
                <ModalBody>
                    <p>Desea borrar post?</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handlePostDelete} >Borrar</Button>{' '}
                    <Button color="secondary" onClick={toggleDeleteModal} >Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}

export default PostLista;