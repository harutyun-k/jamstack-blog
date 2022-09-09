export {};

declare global {
  interface Article {
    id: string;
    slug: string;
    cover: {
      url: string;
    };
    title: string;
    subtitle?: string;
    content?: string;
    tag?: [{
      category: string;
    }];
    meta: {
      createdAt: string;
    };
  }
}