import { useRouter } from 'next/router';

export function useAuth() {
  const router = useRouter();

  function retrieveSession() {
    const session = window.localStorage.getItem('username');

    return session;
  }

  function storeSession(username: string) {
    window.localStorage.setItem('username', username);
  }

  function signOut() {
    window.localStorage.removeItem('username');
    router.push('/');
  }

  return {
    retrieveSession,
    storeSession,
    signOut,
  };
}
