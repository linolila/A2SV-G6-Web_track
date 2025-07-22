
import Footer from '../components/Footer'
import Herosection from '../components/Herosection'

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: '100dvh',
        height: '100dvh',
        width: '100%',
        background: 'linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%)',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
    
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Herosection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage
