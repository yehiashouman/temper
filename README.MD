There is a live instance hosted here;
http://www.yehiashouman.com:8888/admin/dashboard

----- PLEASE FOLLOW ON FOR DETAILS ON SETUP ----


Prerequisites Setup:
nginx/1.10.3, 
PHP 7.1.32 (fpm-fcgi)
Composer 1.8.5,
Nodejs v6.17.1,
Npm 3.10.10,

SETUP: 
1.  CLONE to /opt/temper_assignment
2.  copy the following to /etc/nginx/conf.d/temper_assignment then start nginx

```
server {
    listen       8888 default_server;
    listen       [::]:8888 default_server;
    index       index.php index.html index.htm
    root         /opt/temper_assignment/public;
    charset utf-8;
    location / {
      try_files $uri $uri/ /index.php?$query_string;
    }
    location ~ \.php(?:$|/) {
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      fastcgi_pass 127.0.0.1:9000;
      fastcgi_index index.php;
      fastcgi_intercept_errors on;
      include fastcgi_params;
    }
}

```


3. To install npm packages, on /opt/temper_assignment run 
```sudo npm install```


4. To install composwr packages
```composer install```


5. Make sure directories within 'storage' directory and path to log file is permissive to nginx or apache user.
6. Navigate to /admin/dashboard you should see the following;

![Snapshot of running app instance](./screen_shot.png)


