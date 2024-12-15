# Setup Instructions

## Clone or Download the Repository
Start by cloning the repository to your local machine or downloading it as a ZIP file.

## Backend Setup

1. Open the backend solution (`.sln` file) in **Visual Studio**.
2. Open the **Package Manager Console** (from the Tools menu).
3. Run the following commands in the Package Manager Console to set up the backend:
   
   # 3.1 Restore dependencies
   dotnet restore

   # 3.2 Build the project
   dotnet build
   ```
4. Start the backend project by clicking the **Start Project** (play button) in the Visual Studio toolbar.
5. When prompted:
   - **Trust the ASP.NET Core SSL certificate**: Click **Yes**.
   - **Trust the IIS Express SSL certificate**: Click **Yes**.

The backend API will be running at `http://localhost:5173` and `https://localhost:7223`.

---

## Frontend Setup

1. Open a terminal and navigate to the `frontend` folder:

2. Set up and run the frontend application:
   - **Install dependencies**:
     npm install
   - **Run the development server**:
     npm run dev

The frontend will be accessible at `http://localhost:5173`.

---

## Notes
- Ensure the following tools are installed on your machine:
  - **Visual Studio** (for the backend)
  - **Node.js** (for the frontend)
  - **.NET Core SDK**

