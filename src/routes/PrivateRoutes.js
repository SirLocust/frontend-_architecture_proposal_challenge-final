import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoutes = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace={false} />;
  }

  return children;
};

const mapState = (state) => ({
  user: state.authReducer.user,
});
export default connect(mapState)(PrivateRoutes);
