'use server';

import { updateContent, ContentData } from '@/lib/content';
import { isAuthenticated } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function updateContentAction(formData: FormData) {
  try {
    // Check server-side authentication
    const authenticated = await isAuthenticated();
    console.log('Auth check result:', authenticated); // Debug log
    
    if (!authenticated) {
      console.log('Authentication failed'); // Debug log
      return { success: false, message: 'Unauthorized - Please login again' };
    }

    const contentJson = formData.get('content') as string;
    
    if (!contentJson) {
      return { success: false, message: 'No content data provided' };
    }

    const content: ContentData = JSON.parse(contentJson);
    console.log('Attempting to update content...'); // Debug log
    
    const result = await updateContent(content);
    console.log('Update result:', result); // Debug log
    
    if (result.success) {
      revalidatePath('/');
      return { success: true, message: 'Content updated successfully!' };
    } else {
      return { success: false, message: result.error || 'Update failed' };
    }
  } catch (error) {
    console.error('Action error:', error); // Debug log
    return { success: false, message: 'Server error: ' + (error instanceof Error ? error.message : 'Unknown error') };
  }
}