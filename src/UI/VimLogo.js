import classes from "../App.module.css";

const VimLogo = () => {
  return (
    <img
      className={classes.VimLogo}
      width="116"
      height="33"
      src="https://getvim.com/wp-content/uploads/2017/11/Vim-logo@2x.png"
      alt="VIM logo"
      loading="lazy"
    />
  );
};
export default VimLogo;
