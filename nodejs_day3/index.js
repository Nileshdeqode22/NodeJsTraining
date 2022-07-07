import sequelize from "./util/db";
import Customer from "./models/customer";
import Order from "./models/order";

 
Customer.hasMany(Order, { foreignKey: "customerId" });
let customerId=null;


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//   (async () => {
//     await sequelize.sync({ alter: true });
//     await createCustomers();
//     await createOrders();

// })();
sequelize.sync({ alter: true }).then(() => {
    createCustomers();
    createOrders();
    getAllCustomers();
    getAllOrders();
    getAllCustomersAndOrders();
    getCustomerById();
    getOrderById();
    getCustomerByName();
    getOrderByTotal();
    getCustomerByGroup();
    getOrderByGroup();
    countCustomers();
    countOrders();
    
}
).catch(err => {
    console.log(err);
});


  //create bulk customers and orders and define hasMany relation with or
    const createCustomers = async  ( ) => {
        const customers = [
            {
                name: "John",
                email: "j@gmail.com",
            },
            {
                name: "Jane",
                email: "ja@redfmail.com",
            },
            {
                name: "Joe",
                email: "joe@gmail.com",
            },{
                name: "Jack",
                email: "jack@gmail.com",

            },
            {
                name: "Jill",
                email: "jil@gmail.com",
            },
            {
                name: "Juan",
                email: "juan@gmail.com",
            },
            {
                name: "Jenny",
                email: "jenny@gmail.com",
            },
            {
                name: "Juan",
                email: "juan@gmail.com",
            },

        ];

        await Customer.bulkCreate(customers);
    }

    //create bulk orders and define hasMany relation with customer 
    const createOrders = async () => {
        const orders = [
            {
                total: 100,
                customerId: 1,
            },
            {
                total: 200,
                customerId: 2,
            },
            {
                total: 300,
                customerId: 3,
            },
            {
                total: 400,

                customerId: 4,
            },
            {
                total: 500,
                customerId: 5,
            },
            {
                total: 600,
                customerId: 6,
            },
            {
                total: 700,
                customerId: 7,
            },
            {
                total: 800,
                customerId: 8,
            },
            {
                total: 900,
                customerId: 9,
            },
            {
                total: 1000,
                customerId: 10,
            },
        ];

        await Order.bulkCreate(orders);
    }

    // createCustomers();
    // createOrders();
   
    //get all customers
    const getAllCustomers = async () => {
        const customers = await Customer.findAll();
        console.log("all customers: ", customers);
    }

    //get all orders
    const getAllOrders = async () => {
        const orders = await Order.findAll();
        console.log(orders);
    }
    //get all customers and orders
    const getAllCustomersAndOrders = async () => {
        const customers = await Customer.findAll({
            include: [Order],
        });
        console.log(customers);
    }
    //get customer by id
    const getCustomerById = async () => {

        const customer = await Customer.findByPk(1, {
            include: [Order],
        });
        console.log(customer);
    }
    //get order by id
    const getOrderById = async () => {
        const order = await Order.findByPk(1);
        console.log(order);
    }
    //get customer by name
    const getCustomerByName = async () => {
        const customer = await Customer.findOne({
            where: {
                name: "John",
            },
            include: [Order],
        });
        console.log(customer);
    }
    //get order by total
    const getOrderByTotal = async () => {
        const order = await Order.findOne({
            where: {
                total: 500,
            },
        });
        console.log(order);
    }
    //get customer by group
    const getCustomerByGroup = async () => {
        const customers = await Customer.findAll({
            group: ["name"],
        });
        console.log(customers);
    }
    //get order by group
    const getOrderByGroup = async () => {

        const orders = await Order.findAll({
            group: ["total"],
        });
        console.log(orders);
    }
    //count of customers
    const countCustomers = async () => {
        const count = await Customer.count();
        console.log(count);
    }
    //count of orders
    const countOrders = async () => {
        const count = await Order.count();
        console.log(count);
    }
    