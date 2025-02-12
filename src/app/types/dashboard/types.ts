export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
  }
  
  export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }