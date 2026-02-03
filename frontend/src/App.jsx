
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton  } from '@clerk/clerk-react';
function App() {

  return (
    <>
     <h1>Welocome to the app</h1>
     <SignedOut>
     <SignInButton mode= "modal" > 
      <button>Login </button>
       </SignInButton>
     </SignedOut>

     <SignedIn>
      <SignOutButton />
     </SignedIn>
  <SignedIn>
      <SignOutButton />
     </SignedIn>


  <UserButton />  
    </>
  )
}

export default App
