import React from "react";
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)

export default class Vehicles extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get('http://sabioapi2.azurewebsites.net/api/entities/vehicles',
       { headers: { "sabio-auth": "UFV44SCCS" }
      })

      .then(res => {
        console.log(res);
        this.setState({ items: res.data.items });
      });
  }

  deleteVehicle = (id, index) => {
    axios
    .delete(`http://sabioapi2.azurewebsites.net/api/entities/vehicles/${id}`, {
    headers: {"sabio-auth":"UFV44SCCS"}
    })
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
              <button type="button"  className="btn-circle delete" onClick={ () => this.deleteVehicle(item.id, this, index)}><span><FontAwesomeIcon icon ="trash" /></span></button>
            </div>
            )  

    })

  return(
    <div>{vehicleList}</div>
  )
}

}