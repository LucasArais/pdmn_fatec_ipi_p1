import React, { Component } from 'react'

import {Button} from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        const valorDigitado = event.target.value;
        const somenteNumeros = valorDigitado.replace(/\D/g, '');
        this.setState({ termoDeBusca: somenteNumeros });
    }
    

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)

    }

    render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <div
                className='flex flex-col gap-2 w-full max-w-sm'>
                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search'></InputIcon>
                        <InputText  
                            className='w-full'
                            placeholder={this.props.dica}
                            onChange={this.onTermoAlterado}
                            value={this.state.termoDeBusca}/>
                    </IconField>
                    <Button 
                        label="OK"
                        outlined/>
            </div>
        </form>
    )
    }
}

Busca.defaultProps = {
    dica: 'Busca CEP'
}