import { useAppSelector } from "../../store/typedReduxHooks";
import { useNavigate } from "react-router-dom";

const AuthHoc = ({ WrappedComponent }) => {
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.user.user);
	console.log(user);

	if (!user) {
		navigate("/login");
	}
	return WrappedComponent;
};

export default AuthHoc;
