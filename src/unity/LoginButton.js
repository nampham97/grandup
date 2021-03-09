import LoadPage from "../component/LoadPage";
import { useGoogleAuth } from "../context/GoogleAuthProvider";


const LoginButton = () => {

    const { isInitialized,signIn } = useGoogleAuth();
    console.log('1lanne');
    return (
        isInitialized ? <button onClick={signIn}>Login</button> : <LoadPage />
      );
};

export default LoginButton;