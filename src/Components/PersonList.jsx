import React from 'react'
import axios from 'axios'

export default class PersonList extends React.Component {
    state= {
        items:[]
    }
    componentDidMount(){
        axios.get('http://sabioapi2.azurewebsites.net/api/entities/vehicles',
        {headers:{"sabio-auth":"UFV44SCCS"}
    })
        .then(res => {
            console.log(res)
            this.setState({items: res.data.items});
        })
    }
    render(){
        return(
        <div className="vehicle-item">
            <div>Make: <span className="make"></span></div>
            <div>Model: <span className="model"></span></div>
            <div>Year: <span className="year"></span></div>
            <div className="id hidden"></div>
            <button type="button" className="btn btn-success btn-circle pull-left edit"><span className="glyphicon glyphicon-ok"></span></button>
            <button className="btn btn-danger btn-circle delete" type="button"><span className="glyphicon glyphicon-trash"></span></button>
        </div>



               // {this.state.items.map( item=> <li key={item.id}>{item.model}</li>)}
            
        )
    }
}
