import { getContent } from '@/lib/content';
import { updateContentAction } from './actions';
import { isAuthenticated } from '@/lib/auth';
import AdminForm from './admin-form';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect('/admin/login');
  }
  
  const content = await getContent();
  return <AdminForm initialContent={content} updateAction={updateContentAction} />;
}