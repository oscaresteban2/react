import './CartWidget.css'

export const carrito = () => {
    const Carrito = "../src/assets/carrito.png";
    return (

        <div className='btnCarrito'>
            <img className="imgCarrito" src={Carrito} alt="Carrito de compras" />
            <span className='numeroCarrito'>10</span>
        </div>
    )
}
export default carrito
