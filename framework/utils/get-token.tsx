export const getToken = () => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (typeof window === undefined && !token) {
    return null;
  }
  return token;
};
