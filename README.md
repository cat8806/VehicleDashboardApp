# Dynamic Vehicle Interface Application

This project was developed as part of a take-home technical assessment to demonstrate full-stack development expertise. It simulates a real-time vehicle interface with interactive controls and robust backend support.

## Key Features

### User Interface

- Displays vehicle metrics:
    - **Motor RPM**
    - **Power Consumption**
    - **Battery Percentage**
    - **System Indicators**
- Smooth animations for gauges with real-time updates.
- Adjustable motor speed using a slider.
- Charging simulation feature.

### Backend and Data Management

- **RESTful APIs**:
    - Fetch and update real-time vehicle data.
- Emulates live changes in:
    - Motor RPM
    - Battery levels
    - Power consumption
- **SQLite database** integrated with **Entity Framework Core** for data persistence and synchronization.

### Technical Stack

- **Frontend**: React
- **Backend**: .NET Core
- **Database**: SQLite with Entity Framework Core
- **Hosting**: Azure

## Live Demo

- Explore the live version here: [Dynamic Vehicle Interface Application](https://jolly-tree-0ba90b70f.4.azurestaticapps.net/)

---

## Setup Instructions

Follow these steps to set up the application on your local machine:

### Prerequisites

- **Backend**: Visual Studio (latest version), .NET Core SDK
- **Frontend**: Node.js, npm (or Yarn)
- **Database**: SQLite

---

### Clone or Download the Repository

```bash
git clone [repository URL]
```

---

### Backend Setup

1. Open the backend solution (`.sln` file) in **Visual Studio**.
    
2. Open the **Package Manager Console** (from the Tools menu).
    
3. Run the following commands in the Package Manager Console to set up the backend:
    
    - Restore dependencies:
        
        ```bash
        dotnet restore
        ```
        
    - Build the project:
        
        ```bash
        dotnet build
        ```
        
4. Start the backend project:
    
    - Click the **Start Project** button (play icon) in Visual Studio.
    - Follow the prompts:
        - **Trust the ASP.NET Core SSL certificate**: Select **Yes**.
        - **Trust the IIS Express SSL certificate**: Select **Yes**.
    
    The backend API will be running at:
    
    - `http://localhost:5173`
    - `https://localhost:7223`

---

### Frontend Setup

1. Navigate to the `frontend` folder in a terminal:
    
    ```bash
    cd frontend
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    ```
    
3. Run the development server:
    
    ```bash
    npm run dev
    ```
    

The frontend application will be accessible at:

- `http://localhost:5173`