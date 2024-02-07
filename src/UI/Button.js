import './ButtonStyles.css'
const Button = (props) => {
    return(
        <a href={props.href} className='btn button4' {...props}>{props.value}</a>
    )
}

export default Button;