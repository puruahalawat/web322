
# HealthPlus - Integrated Documentation

## 1. Introduction
The HealthPlus application is a Salesforce Lightning-based platform developed to streamline fitness center operations. It includes features for membership management, class scheduling, customer tracking, and analytics.

### Project Goals
- Increase membership sign-ups by 20% within the next year.
- Improve retention rates by 25% over 6 months.
- Automate 80% of administrative tasks by year-end.
- Enhance revenue from personal training and classes by 30%.

### Scope
#### In-Scope:
- Membership management.
- Class scheduling and bookings.
- Customer tracking.
- Analytics dashboard.

#### Out-of-Scope:
- Billing automation.
- Mobile app development.

---

## 2. Project Structure
### 2.1 Back-End (Spring Boot)
```
src/
├── main/
│   ├── java/ca/seneca/healthplussalesforcelightning/
│   │   ├── controller/    # Controllers for handling API requests.
│   │   ├── model/         # Entity classes for database tables.
│   │   ├── repository/    # Interfaces for CRUD operations.
│   │   ├── service/       # Business logic and service layer.
│   │   └── HealthPlusSalesforceLightningApplication.java
│   ├── resources/
│       └── application.properties # Configurations for the Spring Boot app.
└── test/                   # Unit tests.
```

### 2.2 Front-End (React.js)
```
src/
├── components/            # UI components (e.g., Dashboard, Member List).
├── styles/                # CSS files for styling.
├── utils/                 # Helper functions.
├── App.js                 # Main app entry point.
├── index.js               # Renders the app.
└── assets/                # Images and fonts.
```

---

## 3. Back-End Documentation
### 3.1 Controllers
- **AuthController**: Handles user authentication and authorization.
- **ClassController**: Manages CRUD operations for fitness classes.
- **MemberController**: Manages member profiles and enrollments.
- **StaffController**: Manages staff details and their schedules.

### 3.2 Models
- **Users**: Represents user data with roles like Admin or Member.
- **Classes**: Tracks fitness class details like schedules and instructors.
- **Members**: Stores information about fitness center members.
- **Bookings**: Tracks class bookings by members.

### 3.3 Repositories
- **UsersRepository**: Provides CRUD operations for `Users`.
- **ClassesRepository**: For managing class data.

---

## 4. Front-End Documentation
### 4.1 Components
- **Dashboard**: Displays an overview of class schedules and bookings.
- **Login**: Authentication interface.
- **MemberList**: Shows all members; allows filtering and actions.
- **ClassSchedule**: Visualizes upcoming class schedules.

### 4.2 Utils
- **membershipPlans.js**: Helper functions for membership management.

---

## 5. API Documentation
### 5.1 Endpoints
#### **GET** `/api/members`
- **Description**: Fetch all members.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "membership": "Premium"
    }
  ]
  ```

#### **POST** `/api/bookings`
- **Description**: Create a new class booking.
- **Request Body**:
  ```json
  {
    "memberId": 1,
    "classId": 2
  }
  ```
- **Response**:
  ```json
  {
    "message": "Booking created successfully!"
  }
  ```

---

## 6. Visual References
- **Landing Page**:
  ![Landing Page](images/landing-page-1.png)
- **Dashboard**:
  ![Dashboard](images/dashboard.png)
- **Class Bookings**:
  ![Class Bookings](images/class-bookings.png)

---

## 7. Setup Instructions
### 7.1 Back-End Setup
1. Clone the repository:
   ```bash
   git clone <back-end-repo-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd healthplus-backend
   ```
3. Install dependencies and run:
   ```bash
   mvn spring-boot:run
   ```

### 7.2 Front-End Setup
1. Navigate to the project:
   ```bash
   cd healthplus-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```

---

## 8. Known Issues and Future Enhancements
- **Current Limitations**:
  - No billing integration.
  - Limited analytics features.
- **Future Plans**:
  - Mobile app for on-the-go access.
  - Advanced reporting with AI integration.
