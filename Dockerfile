FROM nginx
COPY . /usr/share/nginx/html
<<<<<<< HEAD
CMD ["nginx", "-g","daemon off;"]
=======
CMD ["nginx", "-g","daemon off;"]
>>>>>>> 4895851293e58f62c8b55a86b0519e3d74b8a75b
