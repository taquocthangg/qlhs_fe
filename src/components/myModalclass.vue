<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
  >
    <div class="bg-white rounded-lg w-1/3">
      <div class="p-4 border-b">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <button @click="save" class="float-right text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-4">
        <div>
          <label
            for="semesterCode"
            type="text"
            class="block text-sm font-medium text-gray-700 text-left"
            >Mã lớp học:</label
          >
          <input
            id="semesterCode"
            type="text"
            v-model="semesterCode"
            class="w-full px-3 py-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled
            readonly
          />
        </div>
        <div>
          <label
            for="semesterName"
            class="block text-sm font-medium text-gray-700 text-left"
            >khối học:</label
          >
          <input
            id="semesterName"
            type="text"
            v-model="semesterName"
            class="w-full px-3 py-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            for="startDate"
            type="text"
            class="block text-sm font-medium text-gray-700 text-left"
            >Tên lớp học:</label
          >
          <input
            id="startDate"
            type="text"
            v-model="startDate"
            class="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            for="endDate"
            class="block text-sm font-medium text-gray-700 text-left"
            >Sĩ số:</label
          >
          <input
            id="endDate"
            v-model="endDate"
            class="w-full px-3 py-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div class="col-span-2">
          <label
            for="note"
            class="block text-sm font-medium text-gray-700 text-left"
            >Ghi chú:</label
          >
          <textarea
            id="note"
            v-model="note"
            rows="3"
            class="w-full px-3 py-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
      </div>
      <div class="p-4 border-t">
        <button
          @click="save"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Lưu
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModalclass",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Tiêu đề Modal",
    },
    className: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      semesterCode: "50804",
      startDate: "",
      endDate: "",
      note: "",
    };
  },
  methods: {
    save() {
      this.$emit("save", {
        semesterCode: this.semesterCode,
        startDate: this.startDate,
        endDate: this.endDate,
        note: this.note,
      });
    },
  },
};
</script>

<style scoped>
h3.text-lg.font-semibold {
  text-align: left;
}

.p-4.border-b {
  display: flex;
  justify-content: space-between;
  background-color: #3d5653;
  color: #fff;
}

.p-4.border-b {
  display: flex;
  justify-content: space-between;
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
}

input#semesterCode,
input#semesterName,
input#startDate,
input#endDate,
.border-h {
  border-bottom: 1px solid #d9d9d9;
}

.rounded-md {
  border-radius: unset;
}

.text-center {
  text-align: left;
}

textarea {
  resize: none;
}
</style>
