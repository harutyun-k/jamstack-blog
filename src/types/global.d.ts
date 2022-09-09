export {};

declare global {
  interface Article {
    data: {
      cover: {
        url: string;
      };
      id: string;
      meta: {
        createdAt: string;
      }
      slug: string;
      tag?: [{
        category: string;
      }];
      title: string;
    }
  }
}