import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main content */}
          <section className="lg:col-span-2 space-y-8">
            <Home />
          </section>
          <div className="h-20 bg-red-500 flex items-center justify-center text-white">
            Tailwind is working
          </div>

          {/* Sidebar */}
          <aside className="">
            <Sidebar />
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  )
}
