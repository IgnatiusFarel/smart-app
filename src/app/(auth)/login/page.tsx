import { Metadata } from 'next';
import LoginViewPage from './_components/login-view';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login In page for authentication.'
};

export default function Page() {
  return <LoginViewPage />;
}
