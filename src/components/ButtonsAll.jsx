import styles from './ButtonsAll.module.css'
let ButtonsAll = ({ onButtonsClick }) => {
    const ButtonsArr = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '*', '/', '.', '=', 'BS']
    return (
        <div className={styles.buttonContainer}>
            {ButtonsArr.map((buttonName) => (
                <button key={buttonName} id={styles.buttonEach} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => onButtonsClick(buttonName)}>
                    {buttonName}
                </button>
            ))}
        </div>
    )
}

export default ButtonsAll