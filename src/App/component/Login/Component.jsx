import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(3, 2),
  },

}));






const renderTextField = (props) => {
  console.log('renderfield', props);
  const {input}=props;
  return (<TextField
    label={props.label}
    name={props.name}
    type={props.type}
    {...input}
  />)

}






const LoginForm = props => {
  console.log('login',props);
  const classes = useStyles();
  const { handleSubmit, ruchir } = props
  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit(ruchir)}>
        <div>
          <Field name="email" component={renderTextField} label="Email" type="email" />
        </div>
        <div>
          <Field name="password" component={renderTextField} label="Password" type="password" />
        </div>
        <div>
          <Button type='submit' variant="contained" className={classes.button}>
            Submit
      </Button>

        </div>
      </form>
    </Paper>
  )
}






export default reduxForm({
  form: 'LoginForm',



})(LoginForm)

