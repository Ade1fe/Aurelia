

// AppRouter.tsx
import  { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAuth, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Landinpage } from '.';
import Homepage from './pages/homepage/Homepage';

const AppRouter = () => {
  const [, setCurrentUser] = useState<User | null>(null);
  const [, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserType(userData.userType || '');
          } else {
            setUserType('');
            console.log('User document does not exist');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setCurrentUser(null);
        setUserType(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const routes = [
    { path: '/', element: <Landinpage /> },
    { path: '/homepage', element: <Homepage /> },
    
   
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRouter;
