import React from 'react';
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Button,
  useBreakpointValue,
  useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import FieldInput from '../components/form/FieldInput';
import FieldSelect from '../components/form/FieldSelect';
// import FieldCheckbox from '../components/form/FieldCheckbox';
const Details = ({
  countries,
  isLogin,
  showLogin,
  setShowLogin,
  handleLogin
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const colSpanVar = useBreakpointValue({ base: 2, md: 1 });
  const colSpanVarLg = useBreakpointValue({ base: 2, md: 2 });
  const toast = useToast();
  const toastId = 'toast-id';
  return (
    <VStack w="full" height="full" p={10} spacing={10} alignItems="flex-start">
      {!isLogin ? (
        <React.Fragment>
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Hey class!!!</Heading>
            <Text>
              If you already have an account, click here to{' '}
              <span
                style={{ fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
              >
                log in
              </span>
              .
            </Text>
          </VStack>
          <form
            onSubmit={handleSubmit((values) => {
              if (!toast.isActive(toastId))
                toast({
                  id: toastId,
                  title: `Thanks you for signing up, ${values.firstName}!`,
                  description: `please check your email to confirm! 😎`,
                  status: 'success',
                  duration: 9000,
                  isClosable: true
                });
              console.log('values', values);
              handleLogin(values.email);
            })}
          >
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <FieldInput
                name="firstName"
                errors={errors}
                register={register}
                colSpan={colSpanVar}
                label="First Name"
              />
              <FieldInput
                name="lastName"
                errors={errors}
                register={register}
                colSpan={colSpanVar}
                label="Last Name"
              />
              <FieldInput
                name="email"
                errors={errors}
                register={register}
                colSpan={colSpanVar}
                label="Email"
              />
              {countries.length ? (
                <FieldSelect
                  name="country"
                  errors={errors}
                  register={register}
                  colSpan={colSpanVar}
                  label="Country"
                  options={countries.map((c) => ({
                    name: c.name.common,
                    value: c.name.common
                  }))}
                />
              ) : null}
              <GridItem colSpan={2}>
                <Button
                  mt={4}
                  variant="primary"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Sign up to continue
                </Button>
              </GridItem>{' '}
            </SimpleGrid>
          </form>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Signup</Heading>
            <Text>
              Return to{' '}
              <span
                style={{ fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
              >
                sign up
              </span>
              .
            </Text>
          </VStack>
          <form
            onSubmit={handleSubmit((values) => {
              handleLogin(values.email);
              toast({
                id: toastId,
                title: `Thanks you for login, ${values.firstName}!`,
                description: `Please check your email`,
                status: 'success',
                duration: 9000,
                isClosable: true
              });
              console.log('values', values);
            })}
          >
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <FieldInput
                name="email"
                errors={errors}
                register={register}
                colSpan={colSpanVar}
                label="Email"
              />
              <GridItem colSpan={2}>
                <Button
                  mt={4}
                  variant="primary"
                  size="lg"
                  w="full"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Log in please! 😎
                </Button>
              </GridItem>{' '}
            </SimpleGrid>
          </form>
        </React.Fragment>
      )}
    </VStack>
  );
};

export default Details;
