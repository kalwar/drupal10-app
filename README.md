# drupal10-app

1. Clone the repo
2. Install dependencies
   `lando composer install`
3. First export the database dump it in github or somewhere private
   `lando db-export`
4. Export the Drupal configuration `lando drush cex`
5. Push it in github
6. If you will clone the repo, you will have to import database
   `lando db-import yourdb.sql.gz --no-wipe`
7. Import also all the configurations
   `lando drush cim`
8. For this repo, you will have to install
   `lando composer require 'drupal/unelmamovie:^1.0'`
9. Import the configurations - yes
10. Start the lando server
    `lando start`
