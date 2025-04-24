import React, { Component } from 'react'
import { Card } from 'primereact/card'
import { ficticios } from './ficticios'
export default class LocalidadeLista extends Component {
    render() {
        const localidades = this.props.enderecos || ficticios
        return (
            <div className="grid p-4">
                {localidades.map((item, dado) => (
                    <div key={dado} className="col-12 mb-3">
                        <Card
                            title={item.logradouro}
                            subTitle={`${item.bairro}, ${item.cidade} - ${item.uf}`}
                            className="shadow-2" >
                                <p className="m-0">CEP:{item.cep}</p>
                        </Card>
                    </div>
                ))}
            </div>
        );
    }

}
