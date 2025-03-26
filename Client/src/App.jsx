import Register from "./auth/Register";
import CreateProfile from "./components/CreateProfile";
import ProfilesList from "./components/ProfilesList";


function App() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100">
    //   <header className="bg-indigo-600 text-white p-6 shadow-lg">
    //     <h1 className="text-3xl font-bold text-center">User Profiles</h1>
    //   </header>
    //   <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <CreateProfile />
    //     <ProfilesList />
    //   </main>
    // </div>
    <Register/>

  );
}

export default App;
