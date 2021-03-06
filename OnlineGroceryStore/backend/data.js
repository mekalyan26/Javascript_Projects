import bcrypt from "bcryptjs";

export default {
  Customer: [
    {
      customer_name: "adminuser",
      site_id: "01",
      email: "kalyan@gmail.com",
      address: "22 Baker's Street",
      city: "NewCity",
      state: "NewState",
      zip_code: "zipcode01",
      phone: "100-000-1001",
      isAdmin: true,
      password: bcrypt.hashSync("1234", 8),
    },
    {
      customer_name: "user1",
      site_id: "01",
      email: "user1@gmail.com",
      address: "123 Street",
      city: "City1",
      state: "State1",
      zip_code: "zipcode01",
      phone: "100-000-1111",
      isAdmin: false,
      password: bcrypt.hashSync("abc123", 8),
    },
  ],

  Product: [
    {
      //_id:'1',
      site_id: "01",
      product_id: "veg1",
      product_category_id: "produccat1",
      product_name: "onion",
      product_price: 10,
      product_image_path: "/images/veg_generic.jpg",
      product_brand: "vegbrand1",
      product_status: "available",
      product_rating: 3.5,
      product_countInStock: 10,
      product_description: "This is a seasonal vegetable",
      product_review: 18,
    },
    {
      //_id:'2',
      site_id: "01",
      product_id: "veg2",
      product_category_id: "produccat2",
      product_name: "potato",
      product_price: 11,
      product_image_path: "/images/veg_generic.jpg",
      product_brand: "vegbrand2",
      product_status: "available",
      product_rating: 3.6,
      product_countInStock: 11,
      product_description: "This is a seasonal vegetable 2",
      product_review: 19,
    },
    {
      //_id:'3',
      site_id: "01",
      product_id: "veg3",
      product_category_id: "produccat3",
      product_name: "cauliflower",
      product_price: 12,
      product_image_path: "/images/veg_generic.jpg",
      product_brand: "vegbrand3",
      product_status: "available",
      product_rating: 3.7,
      product_countInStock: 11,
      product_description: "This is a seasonal vegetable 3",
      product_review: 20,
    },
    {
      //_id:'4',
      site_id: "01",
      product_id: "veg4",
      product_category_id: "produccat4",
      product_name: "cabbage",
      product_price: 13,
      product_image_path: "/images/veg_generic.jpg",
      product_brand: "vegbrand4",
      product_status: "available",
      product_rating: 3.8,
      product_countInStock: 13,
      product_description: "This is a seasonal vegetable 2",
      product_review: 21,
    },
    {
      //_id:'5',
      site_id: "01",
      product_id: "veg5",
      product_category_id: "produccat5",
      product_name: "carrot",
      product_price: 14,
      product_image_path: "/images/veg_generic.jpg",
      product_brand: "vegbrand5",
      product_status: "available",
      product_rating: 3.9,
      product_countInStock: 14,
      product_description: "This is a seasonal vegetable 5",
      product_review: 22,
    },
  ],
};
