import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { current } from '../JS/ACTIONS/actions';

const Profile = () => {
    const user = useSelector(state => state.user.user);
   const fix=0
    const dispatch=useDispatch()
    useEffect(() => {
        const fetchUserData = async () => {
          await dispatch(current());
        };
    
        fetchUserData();
      }, [fix ]);
    
    return (
        <div>
            {user ? <h1>{user.name}</h1> : <div><Spinner /></div>}
        </div>
    );
};

export default Profile;
