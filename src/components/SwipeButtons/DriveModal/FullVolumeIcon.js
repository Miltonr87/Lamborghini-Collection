import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
      fontSize: "50px",
      ["@media(max-width: 480px)"]: {
        fontSize: "25px",
      },
    },
  },
}));

const FullVolumeIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon style={{ color: yellow[500] }}>add_circle</Icon>
    </div>
  );
};

export default FullVolumeIcon;
