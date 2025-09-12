'use server';

import { updateContent, ContentData } from '@/lib/content';
import { isAuthenticated } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function updateContentAction(formData: FormData) {
  // Check server-side authentication
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return { success: false, message: 'Unauthorized' };
  }

  const contentJson = formData.get('content') as string;

  try {
    const content: ContentData = JSON.parse(contentJson);
    const result = await updateContent(content);
    
    if (result.success) {
      revalidatePath('/');
      return { success: true, message: 'Content updated successfully!' };
    } else {
      return { success: false, message: result.error || 'Update failed' };
    }
  } catch {
    return { success: false, message: 'Invalid data format' };
  }
}