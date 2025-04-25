import React, { Component } from 'react'
import { Chart } from 'primereact/chart'

export default class Grafico extends Component {
  contarPorUF(dados) {
    const contagem = {}

    dados.forEach((item) => {
      contagem[item.uf] = (contagem[item.uf] || 0) + 1
    })

    return contagem
  }

  gerarCores(qtd) {
    const cores = ['#42A5F5', '#FFCA28', '#66BB6A', '#EF5350', '#AB47BC', '#FF7043', '#8D6E63', '#26C6DA', '#78909C', '#D4E157']
    const hover = ['#64B5F6', '#FFD54F', '#81C784', '#E57373', '#BA68C8', '#FFA270', '#A1887F', '#4DD0E1', '#90A4AE', '#DCE775']

    return {
      backgroundColor: cores.slice(0, qtd),
      hoverBackgroundColor: hover.slice(0, qtd)
    }
  }

  render() {
    const contagemUF = this.contarPorUF(this.props.dados)
    const labels = Object.keys(contagemUF)
    const valores = Object.values(contagemUF)
    const cores = this.gerarCores(labels.length)

    const chartData = {
      labels,
      datasets: [
        {
          data: valores,
          backgroundColor: cores.backgroundColor,
          hoverBackgroundColor: cores.hoverBackgroundColor
        }
      ]
    }

    const chartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true
          }
        }
      }
    }

    return (
      <div className="card flex justify-content-center shadow-md rounded-lg bg-white p-4">
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className="w-full"
        />
      </div>
    )
  }
}

Grafico.defaultProps = {
  dados: []
}