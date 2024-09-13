const apiEndPoint = {
   users: '/users',
   userById: (id) => `/users/${id}`,
   login: '/users/login',
   imageFileUploader: (imgType) => `/fileuploader/img/?imgType=${imgType}`,
};
export default apiEndPoint;
