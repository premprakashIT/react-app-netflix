import { HeaderComponent } from "./netflix-header";
import { MainComponent } from "./netflix-main";
import "./all.css";
export function IndexComponent(){
    return(
        <div className="netflix-back">
            <section>
            <HeaderComponent />
            <MainComponent />
            </section>
        </div>
        
    );
}