/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
	return { hello: 'world' };
});

/**
 * /auth/session 
 *    -> Verifying user session
 *    -> Returns user data
 * /auth/login 
 *    -> Verifying login
 *    -> Returns token
 */
Route.group(() => {
	Route.post('/sessions', () => console.log('Check if user exists and returns his data'));
	Route.post('/login', () => console.log('Verify user data, generate token'));
}).prefix('/auth');

/**
 * /user/new_user
 *    -> Create new user
 * /user/all_users
 *    -> For admin/owner only
 *    -> Lists all registered users with their data
 * /user/:userId/update_profile
 *    -> User can update his profile
 */
Route.group(() => {
	Route.post('/new_user', () => console.log('Create new user'));
	Route.get('/all_users', () => console.log('List registered users'));
	Route.put('/:userId/update_profile', () => console.log('Update user profile'));
}).prefix('/user');

/**
 *  /article/new_article
 *    -> For Admins/Owner
 *    -> Generate new article for the blog
 *  /article/:articleId/update_article
 *    -> For Admins/Owner
 *    -> Allow article update
 *  /article/fetch/:articleId?
 *    -> Show all articles
 * 		-> Optional param
 * 				-> Get specific article
 *  /article/:articleId
 *    -> Fetch specific article
 *  /article/:articleId/new_comment
 *    -> Allow the creation of commentaries
 *  /article/:articleId/update_commentary
 *    -> Allow the alteration of a commentary
 */
Route.group(() => {
	Route.post('/new_article', 'ArticlesController.newArticle');
	Route.put('/:articleId/update_article', 'ArticlesController.updateArticle');
	Route.get('/:articleId/delete', 'ArticlesController.deleteArticle');
	Route.get('/fetch/:articleId?', 'ArticlesController.getArticles');
	Route.post('/:articleId/new_comment', 'ArticlesController.newCommentary');
	Route.put('/:articleId/update_commentary', 'ArticlesController.updateCommentary');
}).prefix('/article');
