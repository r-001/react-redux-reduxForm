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






const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
  



const SignUpForm = props => {
  const classes = useStyles();
  const { handleSubmit } = props
  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        <div>
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        <div>
          <Field name="passeord" component={renderTextField} label="Password" />
        </div>
        <div>
          <Button variant="contained" className={classes.button}>
            Submit
      </Button>

        </div>
      </form>
    </Paper>
  )
}

export default reduxForm({
  form: 'SignUpForm',

})(SignUpForm)