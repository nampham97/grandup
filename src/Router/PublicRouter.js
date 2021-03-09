import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from '../context/GoogleAuthProvider';


const PublicRouter = ({component: Component, ...rest}) => {

    const {isSignedIn } = useGoogleAuth();

    return (
        <div>
            <Route exact {...rest} render={props => (
                !isSignedIn ?
                <Component {...props} /> : 
                <Redirect exact to="/private" />
            )} />    
        </div>
    );
};

export default PublicRouter;