<template>
  <div class="form-overlay"> 
    <div class="form-container">
      <h3>Cập Nhật NXB</h3>
      <label for="ma">Mã Nhà Xuất Bản</label>
      <input id="ma" v-model="editNXB.maNXB" disabled/>  

      <label for="hoten">Tên Nhà Xuất Bản</label>
      <input id="hoten" v-model="editNXB.tennxb"/>

      <label for="mk">Địa chỉ</label>
      <input id="mk" v-model="editNXB.diachi"/>

      <button @click="submitForm" class="submit">Lưu</button>
      <button @click="$emit('close')" class="cancel">Hủy</button>
    </div>
  </div>
</template>

<script>

export default {
    props: ["nxb"],
    data() {
        return {
            editNXB: {...this.nxb},
            errorMessage: "", 
        };
  },
  methods: {
    submitForm() {
        this.$emit("edit-nxb", this.editNXB); 
        // this.editNXB = { maNXB: "", tennxb: "", diachi: ""};
        this.errorMessage = "";
    },

  },
    watch: {
    nxb(newNXB) {
      this.editNXB = { ...newNXB }; 
    }
  },
};
</script>

<style scoped>
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  text-align: left;
  margin: 10px 0px 0px 0px;
}

input, select {
  width: 100%;
  margin: 2px 0 0 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 8px 15px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.cancel {
  background-color: red;
  color: white;
}

.submit {
background-color: green;
  color: white;
}
</style>
