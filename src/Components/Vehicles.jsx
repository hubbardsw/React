import React from "react";
import axios from "axios";

export default class Vehicles extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get("http://sabioapi2.azurewebsites.net/api/entities/vehicles", {
        headers: { "sabio-auth": "UFV44SCCS" }
      })

      .then(res => {
        console.log(res);
        this.setState({ items: res.data.items });
      });
  }

  deleteVehicle = (index) => {
    let vehicle = this.state.items
    vehicle.splice(index, 1)
    this.setState({items:vehicle})
  }

  render(){
   const vehicleList = this.state.items.map((item, index) => {
      return(

            <div key={item.id} className="vehicle-item" ref="vehicle">
              <div>Make:<span>{item.make}</span></div>
              <div>Model:<span>{item.model}</span></div>
              <div>Year:<span>{item.year}</span></div>
              <button type="button" onClick={this.deleteVehicle.bind(this, index)}>Delete</button>
            </div>
            )  

    })
  
  

  return(
    <div>{vehicleList}</div>
  )
}

}