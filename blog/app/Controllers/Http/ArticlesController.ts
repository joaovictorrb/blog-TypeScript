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
  public async getArticles(param, {request, response}: HttpContextContract) {
    const article = await Article.findOrFail(param.articleId)
    if(article) {
      return article
    }
    const allArticles = await Article.all()
    return allArticles
  }

	public async newArticle({ request, response }: HttpContextContract) {
    const article_data = request.only[('subject', 'content')]
    await Article.create(article_data)
    return response.created
  }

  public async updateArticle(param, { request, response }: HttpContextContract) {
    const article_data = request.only[('subject', 'content')]
    const article = await Article.findOrFail(param.articleId)
    await article.merge(article_data).save()
    return response.accepted
  }

  public async delete(param, {response}: HttpContextContract) {
    const article = await Article.findOrFail(param.articleId)
    await article.delete()
    return response.accepted
  }

}
