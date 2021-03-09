import LoadPage from "../component/LoadPage";
import { useGoogleAuth } from "../context/GoogleAuthProvider";


const LogoutButton = () => {
    const { isInitialized, signOut } = useGoogleAuth();

    return (
        isInitialized ? <button onClick={signOut}>Logout</button> : <LoadPage />
      );
};

export default LogoutButton;