import React from "react"
import Busca from "./components/Busca"
import LocalidadeLista from "./components/LocalidadeLista"
import cepClient from "./utils/cepClient"
import { ficticios } from "./components/ficticios"


export default class App extends React.Component {

  state = {
    localidades: []
  }

  onBuscaRealizada = (cep) => {
    let validacep = /^[0-9]{8}$/;
    if (!validacep.test(cep)) {
      alert("CEP inválido!")
      return
    }

    cepClient.get(`${cep}/json/`)
      .then(response => {
        console.log(response.data)

        if (response.data.erro) {
          alert("CEP não encontrado!")
          return
        }

        this.setState({ localidades: [response.data, ...this.state.localidades] })
      })
  }

  render() {
    return (

      <div class="grid nested-grid">
        <div class="col-8">
          <div class="grid">
            <div class="col-12">
              <div class="text-center p-7 border-round-sm bg-primary font-bold">
                <Busca dica='Buscar CEP'
                  onBuscaRealizada={this.onBuscaRealizada} />
              </div>
            </div>

            <div class="col-12">
              <div class="text-center p-7 border-round-sm bg-primary">
                <LocalidadeLista localidades={[...this.state.localidades, ...ficticios]} />


              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="text-center p-8 border-round-sm h-full bg-primary font-bold">
            grafico vai aqui
          </div>
        </div>
      </div>

    )
  }
}