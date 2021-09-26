import bcrypt from 'bcryptjs';

export default {
    
    users:[
        {
            customer_name:'adminuser',
            site_id:'01',            
            email:'kalyan@gmail.com',
            address:"22 Baker's Street",
            city:"NewCity",
            state:"NewState",
            zip_code:"zipcode01",
            phone:"100-000-1001",            
            isAdmin: true,
            password: bcrypt.hashSync('1234', 8),

        },
        {
            customer_name:'user1',
            site_id:'01',            
            email:'user1@gmail.com',
            address:"123 Street",
            city:"City1",
            state:"State1",
            zip_code:"zipcode01",
            phone:"100-000-1111",
            isAdmin: false,
            password: bcrypt.hashSync('1234', 8),        

        }
        
        

    ],

    products: [
    {
        //_id:'1',
        product_name:'veg1',
        product_category: 'vegetables',
        product_image_path:'/images/veg_generic.jpg',
        product_price: 10,
        product_status:'available',
        product_countInStock:10,
        product_brand: 'vegbrand1',
        product_rating: 3.5,
        product_reviews: 18,
        product_description: 'This is a seasonal vegetable'
    },
    {
        //_id:'2',
        product_name:'veg2',
        product_category: 'vegetables',
        product_image_path:'/images/veg_generic.jpg',
        product_price: 20,
        product_status:'available',
        countInStock:10,
        product_brand: 'vegbrand2',
        product_rating: 4.5,
        product_reviews: 109,
        product_description: 'This is a seasonal vegetable'
    },
    {
        //_id:'3',
        product_name:'veg3',
        product_category: 'vegetables',
        product_image_path:'/images/veg_generic.jpg',
        product_price: 30,
        product_status:'available',
        product_countInStock:10,
        product_brand: 'vegbrand3',
        product_rating: 3.5,
        product_reviews: 19,
        product_description: 'This is a seasonal vegetable'
    },
    {
        //_id:'4',
        product_name:'veg4',
        product_category: 'vegetables',
        product_image_path:'/images/veg_generic.jpg',
        product_price: 40,
        product_status:'available',
        product_countInStock:10,
        product_brand: 'vegbrand4',
        product_rating: 4.0,
        product_reviews: 10,
        product_description: 'This is a seasonal vegetable'
    },
    {
        //_id:'5',
        product_name:'veg5',
        product_category: 'vegetables',
        product_image:'/images/veg_generic.jpg',
        product_price: 47,
        product_status:'available',
        product_countInStock:0,
        product_brand: 'vegbrand4',
        product_rating: 4.3,
        product_reviews: 80,
        product_description: 'This is a seasonal vegetable'
    }
]
};

