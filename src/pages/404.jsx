const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/work';
  }

  return null;
};

export default NotFoundPage;
