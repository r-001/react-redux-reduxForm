import React, { useState } from 'react';
import { connect } from 'react-redux';

import { TextField, Button } from '@material-ui/core';
const Home = ({dispatch}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleOnClick = () => {
    dispatch({ type: 'SET_DATA', payload: { name, city, state } })
  }
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          label="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="state"
          onChange={(e) => setState(e.target.value)}

        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="city"
          onChange={(e) => setCity(e.target.value)}

        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnClick}
        >
          submit
       </Button>
      </div>
    </form>
  )
}



const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
