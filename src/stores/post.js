import { defineStore } from 'pinia';
import { firebaseApp } from '@/firebase';

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [],
  }),
  actions: {
    async createArticle(articleData) {
      try {
        const articleRef = await firebaseApp.firestore().collection('Blogs').add(articleData);
        return articleRef.id;
      } catch (error) {
        console.error('Error creating article:', error);
        throw error;
      }
    },
    async uploadImage(file) {
      try {
        const storageRef = firebaseApp.storage().ref();
        const imageRef = storageRef.child(`images/${Date.now()}_${file.name}`);
        const snapshot = await imageRef.put(file);
        const imageUrl = await snapshot.ref.getDownloadURL();
        return imageUrl;
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
    },
    async shareArticle(articleData) {
      try {
        const imageUrls = [];

        // Upload each image and get its URL
        for (const file of articleData.images) {
          const imageUrl = await this.uploadImage(file);
          imageUrls.push(imageUrl);
        }

        // Update the article data with the image URLs
        articleData.images = imageUrls;

        // Create the article in Firestore
        const articleId = await this.createArticle(articleData);

        return articleId;
      } catch (error) {
        console.error('Error sharing article:', error);
        throw error;
      }
    },
    async fetchArticles() {
      try {
        const snapshot = await firebaseApp.firestore().collection('articles').get();
        this.articles = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
    },
  },
});
