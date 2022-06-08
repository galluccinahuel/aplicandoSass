
class ListaDeComprasActual{



}


class Carrito{

    

    constructor(){

        this.m_numeroDeProductos = [];
        let m_precioFinal;
    }

    Vender(){

        for (const prodcuto of this.m_numeroDeProductos) {
            
            m_precioFinal += prodcuto.m_precio;
            
        }

        this.DevolverPrecioFinal();

    }

    AgregarAListaDeCompras( Producto ){

        this.m_numeroDeProductos.push(Producto);

    }

    QuitarAListaDeCompras(Producto){
        this.m_numeroDeProductos.pop(Producto);
    }

    DevolverPrecioFinal(){

    }


}



class Producto{

    constructor( id, nombre, precio, categoria, descripcion, cantidad){

        this.m_id = id;
        this.m_nombre  = nombre;
        this.m_precio = parseFloat(precio);
        this.m_categoria = categoria;
        this.m_descripcion = descripcion;
        this.m_cantidad = cantidad;
    }


}




