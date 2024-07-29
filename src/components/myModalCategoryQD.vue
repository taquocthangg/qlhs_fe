<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
  >
    <div class="bg-white rounded-lg w-full max-w-6xl">
      <div
        class="p-6 border-b flex justify-between items-center bg-green-700 text-white"
      >
        <h3 class="text-2xl font-semibold">{{ title }}</h3>
        <button @click="close" class="text-white text-3xl">&times;</button>
      </div>
      <div class="p-6 overflow-auto max-h-[75vh]">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="border py-3 px-4"></th>
              <th class="border py-3 px-4">Mã môn</th>
              <th class="border py-3 px-4">Tên môn</th>
              <th class="border py-3 px-4">Môn chuyên</th>
              <th class="border py-3 px-4">Môn tính điểm</th>
              <th class="border py-3 px-4">Môn tính điểm đánh giá</th>
              <th class="border py-3 px-4">Môn tự chọn</th>
              <th class="border py-3 px-4">Phân chi tiết</th>
              <th class="border py-3 px-4">Miễn giảm</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(subject, index) in subjects"
              :key="index"
              class="text-center"
            >
              <td class="border py-3">
                <input type="checkbox" v-model="subject.isExempted" />
              </td>
              <td class="border py-3">{{ subject.code }}</td>
              <td class="border py-3">{{ subject.name }}</td>
              <td class="border py-3">
                <input type="checkbox" v-model="subject.checked" />
              </td>
              <td class="border py-3">
                <input type="checkbox" v-model="subject.isSpecialized" />
              </td>
              <td class="border py-3">
                <input type="checkbox" v-model="subject.isScoreSubject" />
              </td>
              <td class="border py-3">
                <input type="checkbox" v-model="subject.isEvaluatedSubject" />
              </td>
              <td class="border py-3">
                <input type="checkbox" v-model="subject.isOptional" />
              </td>
              <td class="border py-3">
                <input type="checkbox" v-model="subject.isDetailed" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-6 border-t flex justify-end">
        <button
          @click="save"
          class="bg-blue-500 text-white px-5 py-3 rounded-md mr-2"
        >
          Cập nhật
        </button>
        <button
          @click="close"
          class="bg-gray-500 text-white px-5 py-3 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myCategoryQD",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Tiêu đề Modal",
    },
  },
  data() {
    return {
      subjects: [
        {
          code: "01",
          name: "Toán",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
        {
          code: "02",
          name: "Văn",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
        {
          code: "03",
          name: "Anh",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
        {
          code: "04",
          name: "Sử",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
        {
          code: "05",
          name: "Địa",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
        {
          code: "06",
          name: "Vật lý",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
        {
          code: "07",
          name: "Hoá học",
          isSpecialized: true,
          isScoreSubject: true,
          isEvaluatedSubject: true,
          isOptional: true,
          isDetailed: true,
          isExempted: true,
        },
      ],
    };
  },
  methods: {
    close() {
      this.$emit("close", this.subjects);
    },
  },
};
</script>

<style scoped>
h3.text-2xl.font-semibold {
  text-align: left;
}
.p-6.border-b {
  display: flex;
  justify-content: space-between;
  background-color: #3d5653;
  color: #fff;
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, 0.75);
}
input[type="checkbox"] {
  display: block;
  margin: 0 auto;
}
</style>
