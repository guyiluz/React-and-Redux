import React, { Component, } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'






class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Tel-aviv' }
    this.onChange = (address) => this.setState({ address })
    
    
  
  }


  handleChange=(event)=> {
    this.setState({address: event});
  }




  handleFormSubmit = () => {
    console.log('this.state:',this.state);
  
    geocodeByAddress(this.state.address)
      .then(results =>   getLatLng(results[0]))
      .then(latLng =>{
    this.props.HandelnewGeoFence({

      
     ...this.props.newGeoFence,
     address:this.state.address,
     longPos: latLng.lng,
     latPos:latLng.lat,  
     userId:Number(this.props.DataDetails.userId)
 
     
 
            })
          
  })
      .catch(error => console.error('Error', error))
     
      
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange:this.handleChange,
      onBlur:this.handleFormSubmit
     
    }

    const myStyles = {
      root: {
      zIndex:"1",
      fontSize:"85%",
      backgroundColor: '#26374c' },
      input: { width: '100%',
      backgroundColor: '#26374c',
      border:"1px solid #3c4b5b",
      color: 'white',
      marginBottom:"21px",
      marginLeft: '6%',
      width: "80%",
      borderRadius: "4px;",
      height:"46px"
    },
      autocompleteContainer: { backgroundColor: '#212f41',
      opacity: "1",
      borderRadius:"4px",
      color: 'white',
      border:"1px solid #3c4b5b"

      },
      autocompleteItem: { color: '#8dabc4',
  
      backgroundColor: '#26374c' },
      autocompleteItemActive: { color: 'white',

      backgroundColor: '#26374c'},
      googleLogoContainer:{display:"none"}
    }
  

    return (
    <PlacesAutocomplete
      inputProps={inputProps}
      styles={myStyles}
      



    />
  )
  }
}

export default Search;