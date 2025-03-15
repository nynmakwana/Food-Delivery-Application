# **MNPS Food Delivery Application**  
🚀 A full-stack **MERN-based** food delivery application with real-time order tracking, secure payments, and restaurant management.

---

## **Overview**  
The **MNPS Food Delivery Application** is a web-based food ordering platform that allows customers to browse restaurants, place orders, track deliveries in real-time, and make secure online payments. The system includes:  

✔ **Customers** - Order food and track deliveries.  
✔ **Restaurants** - Manage menus and incoming orders.  
✔ **Delivery Personnel** - Update order delivery status.  
✔ **Admins** - Oversee operations and manage users.  

Built using **MongoDB, Express.js, React.js, and Node.js (MERN stack)** with **Stripe API for secure payments**, this platform ensures a seamless user experience.

---

## **Features**  
✅ **User Authentication** (JWT-based login/register).  
✅ **Restaurant & Menu Management** (Add/Edit/Delete food items).  
✅ **Order Placement & Tracking** (Live status updates).  
✅ **Secure Payment Integration** (Stripe API).  
✅ **Admin Dashboard** (Manage users, restaurants, and orders).  
✅ **Delivery Partner Module** (Assign and track deliveries).  
✅ **Responsive UI** (Optimized for both web and mobile).

---

## **Prerequisites**  
- **Node.js** `>=14.x`  
- **MongoDB** (Local or MongoDB Atlas)  
- **Stripe API Key**  
- **Git**  

---

## **Installation**  

### **Clone the Repository**  
```bash
git clone https://github.com/nynmakwana/MNPS-Food-Delivery.git
cd MNPS-Food-Delivery
```

## Start the Application

### Start Backend
```bash
cd backend
npm install
npm run server
```

### Start Frontend
```bash
cd frontend
npm install
npm run dev
```
### Start Backend
```bash
cd backend
npm install
npm run dev
```

The app will be accessible at [http://localhost:5173](http://localhost:5173).

## Usage

Once the application is running, users can perform the following actions:

- **Customers** - Browse menus, place orders, and track them in real-time.
- **Admins** - Manage restaurants, food items, and user accounts.
- **Delivery Personnel** - View assigned deliveries and update order status.

## API Endpoints

| Method | Endpoint               | Description                      |
|--------|------------------------|----------------------------------|
| POST   | `/api/user/register`   | Register a new user             |
| POST   | `/api/user/login`      | Authenticate user               |
| GET    | `/api/restaurants`     | Retrieve all restaurants        |
| POST   | `/api/order/place`     | Place a new order               |
| GET    | `/api/order/list`      | Get all orders                  |
| POST   | `/api/payment/process` | Process payment via Stripe      |

📌 See `backend/routes/` for full API documentation.

## Project Structure

```plaintext
MNPS-Food-Delivery/
├── backend/
│   ├── controllers/     # Business logic
│   ├── models/          # Database schemas (Mongoose)
│   ├── routes/          # API endpoints
│   ├── middleware/      # Authentication & validation
│   ├── config/          # Configuration files
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Application pages
│   │   ├── redux/       # State management
│   │   ├── App.js       # Main app entry
│   │   ├── index.js     # React entry point
│   ├── public/
│   ├── package.json
│
├── README.md
├── package.json
└── .gitignore
```

## Diagrams

1. **System Architecture Diagram**
   📌 Illustrates the interaction between frontend, backend, database, and third-party APIs.

2. **Entity-Relationship Diagram (ERD)**
   📌 Shows relationships between Users, Orders, Restaurants, Payments, and Deliveries.

3. **Class Diagram**
   📌 Depicts object-oriented structure and data models.

4. **Sequence Diagram**
   📌 Illustrates how orders are placed, processed, and tracked.

📌 Find all diagrams in the `docs/diagrams/` folder.

## Design Patterns Used

✔ **Model-View-Controller (MVC):** Separates business logic, data, and UI.
✔ **Singleton Pattern:** Ensures only one database connection exists.
✔ **Observer Pattern:** Notifies customers of real-time order status updates.
✔ **Factory Pattern:** Used for creating different user roles (Admin, Customer, Delivery).
✔ **Decorator Pattern:** Adds flexible discounts and taxes in the payment module.

## Future Enhancements

- 🤖 AI-powered food recommendations.
- 📍 Live delivery tracking with GPS integration.
- 💳 Multi-payment gateway support (PayPal, Google Pay, etc.).
- 💬 Automated chatbot for customer support.

## Security Considerations

🔐 Uses **JWT authentication** for secure user sessions.
🔐 **MongoDB validation** prevents injection attacks.
🔐 **Stripe API** ensures safe and encrypted transactions.

## Contributors

💡 Meet Shah  
💡 Nayan Makwana  
💡 Priyanshu Desai  
💡 Sai Sreyas Sistla  

🙌 Contributions are welcome! Feel free to fork, submit pull requests, and report issues.

## License

📜 This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Acknowledgments

🙏 **MongoDB, Express.js, React.js, and Node.js** for powering this application.  
🙏 **Stripe API** for secure payments.  
🙏 **All contributors** who helped improve this project!  

📌 For any inquiries, contact us via **GitHub Issues** or email.

