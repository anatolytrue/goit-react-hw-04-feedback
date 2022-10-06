import PropTypes from 'prop-types'

const FeedbackOptions = (props) => {
    const { options, onLeaveFeedback } = props;
    return (
        <div className="counter__controls">
            {options.map(btn => (
                <button
                    type="button"
                    name={btn}
                    key={btn}
                    className="counter__btn"
                    onClick={onLeaveFeedback}>
                    {btn}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;