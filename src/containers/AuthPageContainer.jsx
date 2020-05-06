import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signup, login } from "../store/actions/auth";
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispathToProps)(Auth);
