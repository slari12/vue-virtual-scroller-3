type ToState<__State> = {
    [K in keyof __State]: __State[K] | null
  }
  type BaseListDataType<Data> = {
    productList: Data[]
  }
  export declare namespace StoreTypes{
    namespace Product {
      type Product = {
        id: number
        title: string
        description: string
        price: number
        discountPercentage: number
        rating: number
        stock: number
        brand: string
        category: string
        thumbnail: string
      }
      type __State = {
        productList: Product[]
      }
      type State = ToState<__State>
    }
  }