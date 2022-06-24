import banner from '../../assets/images/banner_1.png';
import CardWrapper from '../../components/layout/cardWrapper/CardWrapper';
import LoginForm from './components/loginForm/LoginForm';

const Login: React.FC = () => {
  return (
    <CardWrapper
      imageUrl={banner}
      imageAltName="people-banner"
      headerTitle="login.title"
      headerSubtitle="login.subtitle"
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default Login;
