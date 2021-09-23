import bcrypt from 'bcrypt';

export default {
    
    users:[
        {
            site_id:'01',
            customer_name:'adminuser',
            email:'kalyan@gmail.com',
            address:"22 Baker's Street",
            city:"NewCity",
            state:"NewState",
            zip_code:"zipcode01",
            phone:"100-000-1001",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,

        },
        {
            site_id:'01',
            customer_name:'user1',
            email:'user1@gmail.com',
            address:"123 Street",
            city:"City1",
            state:"State1",
            zip_code:"zipcode01",
            phone:"100-000-1111",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false

        }
        
        

    ],

    products: [
    {
        _id:'1',
        name:'veg1',
        category: 'vegetables',
        image:'/images/veg_generic.jpg',
        price: 10,
        status:'available',
        countInStock:10,
        brand: 'vegbrand1',
        rating: 3.5,
        reviews: 18,
        description: 'This is a seasonal vegetable'
    },
    {
        _id:'2',
        name:'veg2',
        category: 'vegetables',
        image:'/images/veg_generic.jpg',
        price: 20,
        status:'available',
        countInStock:10,
        brand: 'vegbrand2',
        rating: 4.5,
        reviews: 109,
        description: 'This is a seasonal vegetable'
    },
    {
        _id:'3',
        name:'veg3',
        category: 'vegetables',
        image:'/images/veg_generic.jpg',
        price: 30,
        status:'available',
        countInStock:10,
        brand: 'vegbrand3',
        rating: 3.5,
        reviews: 19,
        description: 'This is a seasonal vegetable'
    },
    {
        _id:'4',
        name:'veg4',
        category: 'vegetables',
        image:'/images/veg_generic.jpg',
        price: 40,
        status:'available',
        countInStock:10,
        brand: 'vegbrand4',
        rating: 4.0,
        reviews: 10,
        description: 'This is a seasonal vegetable'
    },
    {
        _id:'5',
        name:'veg5',
        category: 'vegetables',
        image:'/images/veg_generic.jpg',
        price: 47,
        status:'available',
        countInStock:0,
        brand: 'vegbrand4',
        rating: 4.3,
        reviews: 80,
        description: 'This is a seasonal vegetable'
    }
]
};

