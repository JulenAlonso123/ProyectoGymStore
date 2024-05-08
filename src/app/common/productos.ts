export interface Productos {
    productos: Producto[]
}

export interface Producto {
  nombre: string
  tipo: string
  descripcion: string
  precio: number
  foto: string
  related_products: RelatedProduct[]
}

export interface RelatedProduct {
  nombre: string
  precio: number
  foto: string
}

