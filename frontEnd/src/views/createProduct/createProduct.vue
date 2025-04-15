<template>
  <div class="product-form-container">
    <h2 class="text-xl font-semibold">New product info</h2>

    <!-- Image upload section -->
    <h2>Product Images</h2>

    <!-- Main image upload -->
    <div class="main-image-upload">
      <h3>Main Image</h3>
      <div
        class="upload-area main-area"
        @click="triggerMainImageUpload"
        :class="{ 'has-image': mainImageUrl }"
      >
        <img
          v-if="mainImageUrl"
          :src="mainImageUrl"
          alt="Main product image"
          class="preview-image"
        />
        <div v-else class="upload-placeholder">
          <i class="upload-icon">+</i>
          <p>Click to upload main image</p>
        </div>
      </div>
      <input
        type="file"
        ref="mainImageInput"
        @change="handleMainImageUpload"
        accept="image/*"
        class="file-input"
      />
    </div>

    <!-- Additional images upload -->
    <div class="additional-images">
      <h3>Additional Images</h3>
      <div class="additional-images-container">
        <div
          v-for="(image, index) in additionalImages"
          :key="index"
          class="upload-area additional-area"
          @click="triggerAdditionalImageUpload(index)"
          :class="{ 'has-image': image.url }"
        >
          <img
            v-if="image.url"
            :src="image.url"
            alt="Additional product image"
            class="preview-image"
          />
          <div v-else class="upload-placeholder">
            <i class="upload-icon">+</i>
            <p>Image {{ index + 1 }}</p>
          </div>
          <button
            v-if="image.url"
            @click.stop="removeAdditionalImage(index)"
            class="remove-btn"
          >
            ×
          </button>
        </div>
      </div>
      <input
        v-for="(image, index) in additionalImages"
        :key="'input-' + index"
        type="file"
        :ref="'additionalImageInput' + index"
        @change="(e) => handleAdditionalImageUpload(e, index)"
        accept="image/*"
        class="file-input"
      />
    </div>
    <!-- Product details section -->
    <div class="product-details">
      <div class="form-group">
        <inputForm
          label="Product Name"
          placeholder="Enter product name"
          v-model="productName"
          type="text"
          widex="w-1/1"
        />
      </div>

      <div class="form-group flex gap-x-5">
        <inputForm
          label="Brand"
          placeholder="Enter Brand"
          v-model="Brand"
          type="text"
        />
        <inputForm
          label="Category"
          placeholder="Enter Category"
          v-model="Category"
          type="text"
        />
      </div>
      <div class="form-group flex gap-x-5">
        <inputForm
          label="Price"
          placeholder="Enter price"
          v-model="price"
          type="number"
        />
        <inputForm
          label="Count"
          placeholder="Enter count"
          v-model="count"
          type="number"
        />
      </div>

      <div class="form-group">
        <label for="productDescription">Description</label>
        <textarea
          id="productDescription"
          v-model="description"
          placeholder="Enter product description"
          class="form-control textarea"
          rows="4"
        ></textarea>
      </div>
    </div>
    <div class="actions">
      <button @click="submitProduct" class="submit-btn">Submit Product</button>
    </div>
  </div>
</template>

<script>
import "../createProduct/createProduct.css";
import axios from "axios";
import inputForm from "../../components/createInput.vue";
export default {
  name: "ProductForm",
  components: {
    inputForm,
  },
  data() {
    return {
      productName: "",
      price: null,
      count: null,
      Category: "",
      Brand: "",
      description: "",
      mainImageFile: null,
      mainImageUrl: null,
      additionalImages: [
        { file: null, url: null },
        { file: null, url: null },
        { file: null, url: null },
      ],
    };
  },
  methods: {
    triggerMainImageUpload() {
      this.$refs.mainImageInput.click();
    },

    async handleMainImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("productimage", file);

      try {
        const response = await axios.post(
          "http://localhost:8000/api/product/imageUploadProduct",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Upload success:", response.data);

        this.mainImageFile = file;
        this.mainImageUrl = response.data.url; // adjust based on your backend
      } catch (error) {
        console.error("Upload failed:", error);
        this.mainImageUrl = null;
      }
    },

    triggerAdditionalImageUpload(index) {
      console.log("edddd");

      this.$refs[`additionalImageInput${index}`][0].click();
    },

    async handleAdditionalImageUpload(event, index) {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append("productimage", file);

      try {
        const response = await axios.post(
          "http://localhost:8000/api/product/imageUploadProduct",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Upload success:", response);

        this.additionalImages[index].file = file;
        this.additionalImages[index].url = response.data.url;
        console.log(this.additionalImages);
      } catch (error) {
        console.error("Upload failed:", error);
        this.mainImageUrl = null;
      }
    },

    removeAdditionalImage(index) {
      this.additionalImages[index].file = null;
      this.additionalImages[index].url = null;
    },

    validateForm() {
      // if (!this.productName.trim()) {
      //   alert("Please enter a product name");
      //   return false;
      // }
      // if (!this.price || this.price <= 0) {
      //   alert("Please enter a valid price");
      //   return false;
      // }
      // if (!this.mainImageFile) {
      //   alert("Please upload a main product image");
      //   return false;
      // }
      return true;
    },

    submitProduct() {
      if (!this.validateForm()) return;

      // Create a FormData object to send to your backend
      const formData = new FormData();

      // Add product details
      formData.append("productName", this.productName);
      formData.append("price", this.price);
      formData.append("description", this.description);

      // Add images
      if (this.mainImageFile) {
        formData.append("mainImage", this.mainImageFile);
      }

      this.additionalImages.forEach((image, index) => {
        if (image.file) {
          formData.append(`additionalImage${index}`, image.file);
        }
      });

      // Here you would send the formData to your backend
      // For example:
      // axios.post('/api/products', formData);
      let newUploadObject = {
        productname: this.productName,
        brand: this.Brand,
        count: this.count,
        price: this.price,
        category: this.Category,
        extrainfo: this.description,
        productimage: [
          {
            status: "main",
            imageUrl: this.mainImageUrl,
          },
          ...this.additionalImages
            .filter((img) => img.url) // optional: exclude empty slots
            .map((img) => ({
              status: "additional",
              imageUrl: img.url,
            })),
        ],
      };
      console.log(newUploadObject);
      
      // console.log("Submitting product:", {
      //   productName: this.productName,
      //   price: this.price,
      //   description: this.description,
      //   category: this.Category,
      //   count: this.count,
      //   mainImage: this.mainImageFile ? this.mainImageFile.name : null,
      //   additionalImages: this.additionalImages.map((img) =>
      //     img.file ? img.file.name : null
      //   ),
      // });

      // Alert for demonstration purposes
      alert("Product ready for submission!");
    },
  },
};
</script>

<style scoped></style>
