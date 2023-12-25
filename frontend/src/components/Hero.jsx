import { Container, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Hero = () => {
    const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Login/Register System <br></br><br></br></h1>
          <p className='text-center mb-4'>
            <h3>Welcome <span className="text-danger">{userInfo?.name}</span></h3>
            Our platform is designed to provide you with a seamless experience in managing your 
            account and accessing our services. Whether you're a new user or returning, we've got you covered.
          </p> <br></br><br></br>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In 
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;