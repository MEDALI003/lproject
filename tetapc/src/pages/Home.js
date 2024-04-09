import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '../JS/ACTIONS/actions';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    const fetchUserData = async () => {
      await dispatch(current());
      if (user) {
        Navigate("/profile");
      }
    };

    fetchUserData();
  }, [dispatch, user, Navigate]);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
