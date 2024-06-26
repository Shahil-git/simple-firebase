import homePhoto from '../../public/home ss.png'

const Home = () => {
    return (
        <div>
      
  <h1 className="text-7xl font-Prompt text-center bg-gradient-to-r from-blue-500  to-green-400 text-transparent bg-clip-text animate-gradient">Welcome to home</h1>
    
      <img className='max-h-full' src={homePhoto} alt="" />
        </div>
    );
};

export default Home;