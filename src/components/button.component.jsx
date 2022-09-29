import '../sass/components/button.styles.scss'
const Button =({children})=>{
    return (
        <button className="button flex px-4 py-2  text-sm items-center justify-center text-accent-200 border border-accent-200 rounded-md">{children}</button>
    )
}

export default Button