import React from "react";
import "./Conversor.css";
// import AguaHirviendo from "../AguaHirviendo/AguaHirviendo";
import CampoMonto from "../CampoMonto/CampoMonto";

function aDolar(colones) {
  return colones * 615;
}

function aColones(dolar) {
  return dolar / 615;
}

function convertirMoneda(monto, conversion) {
  const campo = parseFloat(monto);
  if (Number.isNaN(campo)) {
    return "";
  }
  const salida = conversion(campo);
  const redondeado = Math.round(salida * 1000) / 1000;
  return redondeado.toString();
}

class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.ejecutarCambioDolar = this.ejecutarCambioDolar.bind(this);
    this.ejecutarCambioColones = this.ejecutarCambioColones.bind(this);
    this.state = { temperatura: "", escala: "c" };
  }

  ejecutarCambioDolar(monto) {
    this.setState({ escala: "d", monto });
  }

  ejecutarCambioColones(monto) {
    this.setState({ escala: "c", monto });
  }

  render() {
    const escala = this.state.escala;
    const monto = this.state.monto;
    const dolar = escala === "c" ? convertirMoneda(monto, aDolar) : monto;
    const colon = escala === "d" ? convertirMoneda(monto, aColones) : monto;

    return (
      <div>
        <CampoMonto
          moneda="c"
          monto={colon}
          ejecutarCambioMoneda={this.ejecutarCambioColones}
        />
        <CampoMonto
          moneda="d"
          monto={dolar}
          ejecutarCambioMoneda={this.ejecutarCambioDolar}
        />
      </div>
    );
  }
}

export default Conversor;
