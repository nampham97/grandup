import { BrowserRouter, Route} from 'react-router-dom';
import PrivatePage from './component/PrivatePage';
import PublicPage from './component/PublicPage';

import PrivateRouter from './Router/PrivateRouter';
import PublicRouter from './Router/PublicRouter';
import './App.css';
import LoadPage from './component/LoadPage';
import { useGoogleAuth } from './context/GoogleAuthProvider';
import NavPage from './component/NavPage';
import About from './component/About';
import Profile from './component/Profile';
import Summary from './api/Summary';
import Contract from './component/Contract';

function App() {
  const { isInitialized, googleUser,isSignedIn } = useGoogleAuth();
  console.log('isInitialized:', isInitialized);
  console.log('googleUser:', googleUser);
  //handle Form Contract

  return (
    <div className="App">

        {!isInitialized ? <LoadPage /> : 
        
        <BrowserRouter>
            <NavPage userName={googleUser?.profileObj?.givenName}/>
         
            <PublicRouter path="/" component={PublicPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contract" render={() => <Contract 
                                                          email={googleUser?.profileObj?.email}
                                                         />
                                                  }/>

            <PrivateRouter path="/private" component={PrivatePage} />                

            <Route exact path="/private/profile" render={() => <Profile isSignedIn={isSignedIn} profileUser={googleUser?.profileObj} />} />

            <Route exact path="/private/summary" component = {Summary} />
     
        </BrowserRouter>
        }
    </div>
  );
}

export default App;
