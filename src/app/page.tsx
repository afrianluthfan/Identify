import Navbar from './components/Navbar';
import Line from './components/Line';
import RunningText from './components/RunningText';
import HomeText from './components/HomeText';

const Home = () => (
  <>
    <Navbar />
    <div className='fixed left-2 top-[50%] translate-y-[-50%]'>
      <Line />
    </div>
    <div className='fixed left-0 top-[15%] opacity-30 blur-sm'>
      <RunningText />
    </div>
    <HomeText />
  </>
);

export default Home;
