import PropTypes from 'prop-types'

export default function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        <ul className="counter__statistics">
            <li className="counter__stats-item">Good: {good}</li>
            <li className="counter__stats-item">Neutral:  {neutral}</li>
            <li className="counter__stats-item">Bad:  {bad}</li>
            <li className="counter__stats-item">Total: {total}</li>
            <li className="counter__stats-item">Positives: {positivePercentage }%</li>
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}