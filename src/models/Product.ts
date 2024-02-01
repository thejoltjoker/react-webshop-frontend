export interface Product {
  id:           number;
  name:         string;
  category:     string;
  brand:        string;
  price:        number;
  color:        string;
  size:         string;
  material:     string;
  description:  string;
  shortDescription:  string;
  images:       string[];
  availability: boolean;
  rating:       number;
  reviews:      Review[];
}

export interface Review {
  username: string;
  rating:   number;
  comment:  string;
}
