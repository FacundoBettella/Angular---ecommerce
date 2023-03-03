export interface Product {
   id?: string;
   title: string;
   description: string;
   price: number;
   images: string[];
   category?: Category;
   rating?: Rating;
}

interface Rating {
   rate: number;
   count: number;
}

interface Category {
   id?: number;
   name: string;
   typeImg?: string;
}

export interface createProductDTO extends Omit<Product, 'id' | 'category'> {
   categoryId?: number;
}

export type updateProductDTO = Partial<createProductDTO>
