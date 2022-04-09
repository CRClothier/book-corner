import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Catagories() {
  const dispatch = useDispatch();
  const dispatchCheckStatus = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };

  return <button className="checkStatus" type="button" onClick={dispatchCheckStatus}>Check Status</button>;
}

export default Catagories;
