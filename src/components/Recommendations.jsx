import './css/Recommendations.css';
import recData from '../data/recommendations.json';

function Recommendations() {
    return (
        <div id="recommendations">
            <h3 className='category-header'>Recommendations</h3>
            {recData.map(rec => (
                <div className='recommendation'>
                    <h3>{rec.name} - {rec.position}</h3>
                    <p>{rec.recommendation}</p>
                </div>
            ))}
        </div>
    );
}

export default Recommendations;