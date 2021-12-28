import './DealDate.css';

const DealDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    //  const year = props.date.getFullyear();

    return (
        <div className="deal-date">
            <div className="deal-date__month">{month}</div>
            <div className="deal-date__day">{day}</div>

        </div>
    );
}
export default DealDate;