import toast from 'react-hot-toast';

// Toast notification helpers
export const showSuccessToast = (message: string) => {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      background: '#10B981',
      color: '#fff',
      fontWeight: '500',
    },
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    duration: 4000,
    position: 'top-right',
    style: {
      background: '#EF4444',
      color: '#fff',
      fontWeight: '500',
    },
  });
};

// Smooth scroll helper
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Email validation helper
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Copy to clipboard helper
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    showSuccessToast('Copied to clipboard!');
    return true;
  } catch (err) {
    showErrorToast('Failed to copy to clipboard');
    return false;
  }
};

// Format date helper
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Debounce helper for search/input
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Animation delay helper
export const getAnimationDelay = (index: number, baseDelay: number = 0.1): number => {
  return baseDelay * index;
};

// Open external link helper
export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Download file helper
export const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showSuccessToast('Download started!');
};

// Theme helpers
export const getThemeColor = (isDark: boolean) => ({
  primary: isDark ? '#3B82F6' : '#2563EB',
  secondary: isDark ? '#8B5CF6' : '#7C3AED',
  background: isDark ? '#0F172A' : '#FFFFFF',
  surface: isDark ? '#1E293B' : '#F8FAFC',
  text: isDark ? '#F1F5F9' : '#0F172A',
  textSecondary: isDark ? '#CBD5E1' : '#64748B',
});

// Local storage helpers
export const saveToLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    showErrorToast('Failed to save to local storage');
  }
};

export const getFromLocalStorage = (key: string, defaultValue: any = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};
