import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{
            display: 'block',
            width: '250px',
            heigth: '250 px',
            objectFit: 'contain',
            margin: '0 auto'
        }} src={img} alt="ERROR" />
    )
}

export default ErrorMessage;