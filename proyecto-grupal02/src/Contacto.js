import React from 'react';

class Contacto extends React.Component {

    render() {

        return (
            <div className="container formularioContacto">
                <h2>Formulario de Contacto</h2>
                <form>
                    <div className="mb-3">
                        <label for="" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                            required />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email</label>
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder=""
                            required />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Mensaje</label>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" required
                                ></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </form>
            </div>

        );
    }
}

export default Contacto;