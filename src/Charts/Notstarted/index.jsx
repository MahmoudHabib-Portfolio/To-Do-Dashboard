import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Notstarted = () => {
  const options = {
    animationEnabled: true,
    subtitles: [{
      text: "13%",
      verticalAlign: "center",
      fontSize: 25,
      dockInsidePlotArea: true
    }],
    backgroundColor: "transparent",
    data: [{
      type: "doughnut",
      innerRadius: "78%",
      dataPoints: [
        { name: "", color:"#D9D9D9", y: 80 },
        { name: "", color: "#F21E1E", y: 20 }
      ]
    }],
    width: 125,
    height: 135,
  }
  return (
      <CanvasJSChart options={options} />
  )
}

export default Notstarted;