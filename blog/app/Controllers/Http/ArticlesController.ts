import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'

/**
 * ! METHODS
 * ? => newArticle
 * ? => updateArticle
 * ? => deleteArticle
 * ? => getArticles
 * ? => newCommentary
 * ? => updateCommentary
 */
export default class ArticlesController {
	public async newArticle({ request, response }: HttpContextContract) {
    const article_data = request.only[('subject', 'content')]

    await Article.create(article_data)

    return response.created
  }
}
