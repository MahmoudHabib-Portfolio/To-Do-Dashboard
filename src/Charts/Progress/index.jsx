import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Notstarted = () => {
  const options = {
    animationEnabled: true,
    subtitles: [{
      text: "46%",
      verticalAlign: "center",
      fontSize: 25,
      dockInsidePlotArea: true
    }],
    backgroundColor: "transparent",
    data: [{
      type: "doughnut",
      innerRadius: "78%",
      dataPoints: [
        { name: "", color:"#0225FF", y: 54 },
        { name: "", color: "#D9D9D9", y: 46 },
      ]
    }],
    width: 125,
    height: 135
  }
  return (
      <CanvasJSChart options={options} />
  )
}

export default Notstarted;