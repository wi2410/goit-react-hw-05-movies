import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="10"
        color="#49eff2"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderWrapper>
  );
};
export default Loader;
