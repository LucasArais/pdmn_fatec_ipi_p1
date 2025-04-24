// rcc

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
        console.log(event.target.value)
    }

  render() {
    return (
      <div
        className='flex flex column'>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search'></InputIcon>
                <InputText 
                className='w-full'
                placeholder={this.props.dica}
                onChange={this.onTermoAlterado}/>
            </IconField>
            <Button 
                label = "OK" 
                outlined/>
    </div>
    )
  }
}

Busca.defaultProps = {
    dica: 'Busca CEP'
}
