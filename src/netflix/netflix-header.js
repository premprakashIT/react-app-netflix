import "./all.css";
export function HeaderComponent(){
    return(
        <header className="p-3 d-flex justify-content-between">
            <div className="brand-title">NETFLIX</div>
            <div className="d-flex">
                <div className="dropdown mx-3">
                    <button className="btn btn-danger dropdown-toggle">
                        <span className="bi bi-globe"></span>
                        Language
                    </button>
                </div>
                <div>
                    <button className="btn btn-danger">
                        Signin
                    </button>
                </div>


                
            </div>
        </header>
    );
}