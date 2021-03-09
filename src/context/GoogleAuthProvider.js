import { createContext, useContext } from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
    
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  })

  console.log('googleAuth:', googleAuth);

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => useContext(GoogleAuthContext)