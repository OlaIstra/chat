import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signup, login, recieveAuth } from "../store/actions/auth";
import Auth from "../pages/Auth/Auth";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispathToProps = (dispatch) =>
  bindActionCreators(
    {
      signup,
      login,
      recieveAuth,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispathToProps)(Auth);
