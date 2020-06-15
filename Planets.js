import React from 'react';

class Planet extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <form action="submit">
        <label>Destination1 : </label><br/>
        <select id = "destination-1" name="destination-1"></select>
      </form>
    );
  }
}

export default Planet;
