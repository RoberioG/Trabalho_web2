import React, {Component} from 'react'
import Main from '../template/main/Main'
import axios from 'axios'
import "./UserCrud.css"

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user:{name: '', endereco:'', pedido: '', stts:'' },
    list:[]
}

const headerProps = {
    icon: 'users',
    title: 'Clientes',
    subtitle: 'Cadastro de Clientes: Incluir, Listar, Alterar e Exluir!'
}

export default class UserCrud extends Component{

    state = {...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({list})
        })
    }

    clear(){
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }

    getUpdateList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderTable(){
        return(
            <div id='posicionamento'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Pedido</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
    
    renderRows(){
        return this.state.list.map(user => {
            return(      
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.endereco}</td>
                    <td>{user.pedido}</td>
                    <td>{user.stts}</td>
                    <td>
                        <button className='btn btn-warning'
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className='btn btn-danger ml-2'
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    radiobottom(){
        var choices = [];
        var els = document.getElementsByName('stts');
        
        for (var i=0;i<els.length;i++){
            if ( els[0].checked ){
                els = []
                return true
            }
        }
        return true
        

    }

    renderForm(){
        return(
            <div className='form'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Nome</label>
                            <input type='text' className='form-control'
                                name='name'
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o nome...'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Endereço</label>
                            <input type='text' className='form-control'
                                name='endereco'
                                value={this.state.user.endereco}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o endereço...'/>
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Pedido</label>
                            <input type='text' className='form-control'
                                name='pedido'
                                value={this.state.user.pedido}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o qual seu pedido...'/>
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Tipo de entrega:</label>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="materialUnchecked" checked
                                name='stts'
                                value={this.state.user.stts = this.radiobottom() ? "Retirada" : "Entrega"}
                                onChange={e => this.updateField(e)}
                                />
                                <label class="form-check-label" for="materialUnchecked">Entrega</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="materialUnchecked"
                                name='stts'
                                value={this.state.user.stts = this.radiobottom() ? "Retirada" : "Entrega"}
                                />
                                <label class="form-check-label" for="materialUnchecked">Retirada</label>
                            </div>
                        </div>
                    </div>



                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className='btn btn-primary'
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className='btn btn-secondary ml-2'
                            onClick={e => this.save(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}