import "./Home.css";
import { Link } from "react-router-dom";
import "./Home.css"


function Home() {
    return (
            <div className="home_background">
                <div className="button_box">
                <h1>Welcome to Budget App</h1>
                <button>
                    <Link to="/transactions">
                        See all transactions
                    </Link>
                </button>  
                </div> 
        </div>
    )
}

export default Home