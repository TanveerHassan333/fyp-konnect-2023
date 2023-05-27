<template>
  <form @submit.prevent="submitArticle">
    <RichTextEditor v-model="content" />

    <!-- Other form inputs -->

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useArticleStore } from '../stores/post';

export default {
  name: 'ArticleForm',
  components: {
    RichTextEditor: () => import('../components/RichTextEditor.vue'),
  },
  setup() {
    const content = ref('');
    const articleStore = useArticleStore();

    const submitArticle = () => {
      const articleData = {
        content: content.value,
        // Other article data from the form
      };

      // Upload images to Firebase Storage and get the image URLs
      const imageTags = document.getElementsByTagName('img');
      const imagePromises = Array.from(imageTags).map((img) => {
        const base64Image = img.src.split(',')[1];
        const storageRef = firebaseApp.storage().ref();
        const imageRef = storageRef.child(`images/${Date.now()}.jpg`);
        return imageRef.putString(base64Image, 'base64').then((snapshot) => snapshot.ref.getDownloadURL());
      });

      Promise.all(imagePromises)
        .then((imageUrls) => {
          articleData.images = imageUrls;

          articleStore.createArticle(articleData)
            .then((articleId) => {
              // Handle successful submission, e.g., redirect to article details page
            })
            .catch((error) => {
              // Handle submission error
            });
        })
        .catch((error) => {
          // Handle image upload error
        });
    };

    return {
      content,
      submitArticle,
    };
  },
};
</script>
