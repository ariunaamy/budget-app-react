import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="home">
            <div className="banner">
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