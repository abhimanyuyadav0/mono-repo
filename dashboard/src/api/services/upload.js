import axios from 'axios';
import { apiEndPoint } from '../handlers';
import { BASE_URL } from '../handlers/api';

const get_image_url = async (payload) => {
   const response = axios.post(
      BASE_URL + apiEndPoint.imageFileUploader(payload.imgType),
      payload.formData
   );
   return response;
};

export { get_image_url };
