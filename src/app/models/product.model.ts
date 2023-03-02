export interface Product {
   id: string;
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
   id: number;
   name: string;
   typeImg?: string;
 };

