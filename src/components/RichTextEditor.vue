<template>
    <div>
      <div ref="editorContainer"></div>
      <input type="file" @change="uploadImage" accept="image/*" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Quill from 'quill';
  
 
      const editorContainer = ref(null);
      let quillEditor;
  
      onMounted(() => {
        quillEditor = new Quill(editorContainer.value, {
          theme: 'snow',
          // Customize Quill options as needed
          modules: {
            toolbar: [
              // Include any other toolbar options you want
              ['image'],
            ],
          },
        });
  
        // Emit content change event
        quillEditor.on('text-change', () => {
          const content = quillEditor.root.innerHTML;
          // Emit the content to parent or perform any necessary logic
        });
  
        // Handle image uploads
        const inputImage = editorContainer.value.querySelector('input[type=file]');
        if (inputImage) {
          inputImage.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                const base64Image = reader.result;
                this.insertImage(base64Image);
              };
              reader.readAsDataURL(file);
            }
          });
        }
      });
  
      const insertImage = (base64Image) => {
        const range = quillEditor.getSelection();
        quillEditor.insertEmbed(range.index, 'image', base64Image);
        return {
        editorContainer,
        insertImage,
      };
      };
  
     
  
  </script>
  