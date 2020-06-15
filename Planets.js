import React from 'react';
class Planet extends React.Component{
  constructor(props){
    super(props);
    this.state={
      planetData: [],
      vehiclesData: [],
      destinations1: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://findfalcone.herokuapp.com/planets')
    .then(res => res.json())
    .then(data=>{
      this.setState({
        planetData:data
      })
    });
    
  }
  handleChange(e){
    var planetData = this.state.planetData.filter(item=>item.name!==e.target.value);
    this.setState({
      planetData: planetData,
      destination1:e.target.value
    })
    fetch('https://findfalcone.herokuapp.com/vehicles')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.setState({
        vehiclesData: data
      })
      console.log(this.state.vehiclesData)
    })
  }
  render(){
    return (
      <form action="submit">
        <label>Destination1 : </label><br/>
        <select id = "destination-1" name="destination-1" onChange={this.handleChange}>
        <option value="" disabled selected>Select</option>
        {this.state.planetData.map(obj => {
          return <option value={obj.name}>{obj.name}</option>
        })}
        </select>
        {
        this.state.vehiclesData.map(obj=>{
          return <div><input type="radio" name="vehicle-1" value={obj.name} />
          <label>{obj.name}</label></div>
        })
        }
      </form>
    );
  }
}

export default Planet;
