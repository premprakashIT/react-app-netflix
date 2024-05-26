import "./all.css";
export function RegisterComponent(){
    return(
        <div className="register-Box">
            <p>Ready to watch? Enter you email to create or restart you membership.</p>
            <div className="input-group input-group-lg">
                <input type="email" placeholder="Your email address" className="form-control"></input>
                <button className="btn btn-danger">
                    Get started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>           
    );
}