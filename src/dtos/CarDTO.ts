interface Acessory {
  type: string
  name: string
  id: string
}

export interface Photo {
  photo: string
  id: string
}

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  accessories: Acessory[]
  photos: Photo[]
}