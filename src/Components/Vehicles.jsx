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

  render(){
      return(
          <div>
              
          </div>
      )
  }
}
