import React from 'react';
class Planet extends React.Component{
  constructor(props){
    super(props);
    this.state={
      planetData: []
    }
  }
  componentDidMount(){
    fetch('https://findfalcone.herokuapp.com/planets')
    .then(res => res.json())
    .then(data=>{
      this.setState({
        planetData:data
      })
    })
  }
  render(){
    console.log(this.state)
    return (
      <form action="submit">
        <label>Destination1 : </label><br/>
        <select id = "destination-1" name="destination-1">
        {this.state.planetData.map(obj => {
          return <option>{obj.name}</option>
        })}
        </select>
      </form>
    );
  }
}

export default Planet;
