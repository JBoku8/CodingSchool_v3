export interface IArticleSource {
  id: string | null;
  name: string;
}

export interface IArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: IArticleSource;
}

export interface INewsApiResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export interface INewsApiErrorResponse {
  status: string;
  code: string;
  message: string;
}

export interface IArticleCategory {
  name: string;
}

// business entertainment general health science sports technology

export enum CategoryEnum {
  business = 'business',
  entertainment = 'entertainment',
}
