export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    dateofproduction: Date;
    madeby: string;
    dateofproductiondisplay: string;
    // currentdate: Date;
    // Auto generate dal DB
  }

export const products = [
{
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    dateofproduction: new Date('01-01-2000'),
    madeby: 'contoso.com',
    dateofproductiondisplay: ''
},
{
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    dateofproduction: new Date('02-02-2000'),
    madeby: 'contoso.com',
    dateofproductiondisplay: ''
},
{
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    dateofproduction: new Date('03-03-2000'),
    madeby: 'contoso.com',
    dateofproductiondisplay: ''
},
{
    id: 4,
    name: 'Ferrari',
    price: 300299.99,
    description: 'Ferrari Testa rossa',
    dateofproduction: new Date('04-04-2000'),
    madeby: 'contoso.com',
    dateofproductiondisplay: ''
}
];
