import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
      fontSize: '50px',
      // eslint-disable-next-line no-useless-computed-key
      ['@media(max-width: 480px)']: {
        fontSize: '25px',
      },
    },
  },
}));

const HalfVolumeIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon style={{ color: red[500] }}>remove_circle</Icon>
    </div>
  );
};

export default HalfVolumeIcon;
