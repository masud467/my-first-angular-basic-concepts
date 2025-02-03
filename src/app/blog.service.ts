export class BlogService {
  getBlogPosts() {
    return [
      {
        title: 'First Post',
        content: 'This is the first post content.',
        author:'John Doe'
      },
      {
        title: 'Second Post',
        content: 'This is the second post content.',
        author:'Jane Smith'
      },
      {
        title: 'Third Post',
        content: 'This is the third post content.',
        author:'Alice Johnson'
      }
    ];
  }
}