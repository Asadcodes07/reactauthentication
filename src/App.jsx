import "./App.css";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
function App() {
  return (
    <div>
      <h1>This is clerk Authentication</h1>
      <Show when="signed-out">
        <SignInButton
        fallbackRedirectUrl={"/dashboard"}
        forceRedirect={"/dashboard"}
         />
        <SignUpButton />
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}

export default App;
