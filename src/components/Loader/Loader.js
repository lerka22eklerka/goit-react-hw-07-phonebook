import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';


export const Loader = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div>
      {isLoading && !error && (
        <ThreeDots color="#4fa94d" width={45} height={45} />
      )}
    </div>
  );
};

