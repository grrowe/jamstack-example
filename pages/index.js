import React, { useState, useEffect } from 'react';
import {
  Container,
  useColorMode,
  useColorModeValue,
  Flex,
  Button
} from '@chakra-ui/react';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://rexkbdpceoggwbmramxo.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTk3OTg3MSwiZXhwIjoxOTM1NTU1ODcxfQ.cJkduXKK11qwHhyWJnmKoBDF5Hut1scn-DbN77PGrDk';
import Nav from '../src/nav';
import Signup from '../src/signup';

export default function Index({ getAllCounties }) {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  let user = supabase.auth.user()
  // const [user, setUser] = useState(supabase.auth.user());
  const [countries, setCountries] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    if (!countries.length) {
      axios({
        method: 'get',
        url: 'https://restcountries.com/v3.1/all'
      }).then((data) => setCountries(data.data));
    }
  }, [countries, setCountries, getAllCounties]);
  // useEffect(() => {
  //   setUser(supabase.auth.user());
  // }, []);
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  const handleLogin = async (email) => {
    const { error } = await supabase.auth.signIn({ email });
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  };
  console.log(user);

  return (
    <Container maxW="container.xl" p={0}>
      <Nav
        toggleColorMode={toggleColorMode}
        bgColor={bgColor}
        secondaryTextColor={secondaryTextColor}
      />

      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        {user?.id ? (
          <div>
            You are logged in, peep the console for your account details
            <Button
              label="Sign out here 😢"
              onClick={() => {
                signOut();
                // setUser(null);
                location.reload();
              }}
            >
              Sign out here 😢
            </Button>
          </div>
        ) : showLogin ? (
          <Signup
            isLogin
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            handleLogin={handleLogin}
            signOut={signOut}
          />
        ) : (
          <Signup
            countries={countries}
            isLogin={false}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            handleLogin={handleLogin}
            signOut={signOut}
          />
        )}
        {/* <Cart bgColor={bgColor} /> */}
      </Flex>
    </Container>
  );
}
