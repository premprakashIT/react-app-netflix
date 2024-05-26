import { RegisterComponent } from "./netflix-register";
import "./all.css";
export function MainComponent(){
    return(
        <main>
            <div>
                <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
                <RegisterComponent />
            </div>

        </main>
    );
}