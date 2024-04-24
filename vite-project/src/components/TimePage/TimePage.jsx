import './TimePage.css';
import Timer from '../Timer/Timer';
import Rank from '../Rank/Rank';

function TimePage() {

    return (
        <div className="TimePage">
            <header>
                <h1>Study time</h1>
            </header>
            <main>
                <Timer />
                <Rank />
            </main>
            
        </div>
    );
}

export default TimePage;
