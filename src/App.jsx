import React from "react"
import Busca from "./components/Busca"
import LocalidadeLista from "./components/LocalidadeLista"

const App = () => {
  
  return (

    <div class="grid nested-grid">
      <div class="col-8">
        <div class="grid">
          <div class="col-12">
            <div class="text-center p-7 border-round-sm bg-primary font-bold">
              <Busca />
            </div>
          </div>

          <div class="col-12">
            <div class="text-center p-7 border-round-sm bg-primary font-bold">
              <LocalidadeLista />

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

export default App