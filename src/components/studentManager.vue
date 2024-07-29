<template>
  <div class="container">
    <div class="info-section">
      <div class="info-section__title">Thông tin môn học</div>
      <div class="info-section_box">
        <div class="info-section_col">
          <div class="info_col-item">
            <div class="info-item_des">Danh mục môn học quy định</div>
            <i
              class="fa-solid fa-ellipsis-vertical"
              @click="showCategoryQD = true"
            ></i>
          </div>
          <transition name="modal-fade">
            <MyModalCategoryQD
              :isVisible="showCategoryQD"
              @close="showCategoryQD = false"
              title="Danh mục môn học quy định"
            />
          </transition>
          <div class="info_col-item">
            <div class="info-item_des">Danh mục môn học Phát sinh</div>
            <i
              class="fa-solid fa-ellipsis-vertical"
              @click="showCategoryPS = true"
            ></i>
          </div>
          <transition name="modal-fade">
            <MyModalCategoryPS
              :isVisible="showCategoryPS"
              @close="showCategoryPS = false"
              title="Danh mục môn học Phát sinh"
            />
          </transition>
          <div class="info_col-item">
            <div class="info-item_des">Danh mục môn học Nghề</div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div class="info-section_col section_item">
          <calendar></calendar>
        </div>
      </div>
    </div>
    <div class="info-section">
      <span class="info-section__title">Thông tin học kì</span>
      <table class="info-table">
        <thead class="info-table__thead">
          <tr class="info-table__header-row">
            <th class="info-table__header-cell">Mã học kì</th>
            <th class="info-table__header-cell">Tên học kì</th>
            <th class="info-table__header-cell">Hệ số điểm</th>
            <th class="info-table__header-cell">Ngày bắt đầu</th>
            <th class="info-table__header-cell">Ngày kết thúc</th>
            <th class="info-table__header-cell">Tuỳ chọn</th>
          </tr>
        </thead>
        <tbody
          class="info-table__body"
          v-for="(item, index) in data"
          :key="index"
        >
          <tr class="info-table__row">
            <td class="info-table__cell">{{ item["Mã học kì"] }}</td>
            <td class="info-table__cell">{{ item["Tên học kì"] }}</td>
            <td class="info-table__cell">{{ item["Hệ số điểm"] }}</td>
            <td class="info-table__cell">{{ item["Ngày bắt đầu"] }}</td>
            <td class="info-table__cell">{{ item["Ngày kết thúc"] }}</td>
            <td class="info-table__cell">
              <button class="info-table__icon">
                <i class="fa-regular fa-eye"></i>
              </button>
              <button class="info-table__icon" @click="showModal = true">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <MyModal
                :isVisible="showModal"
                @save="showModal = false"
                title="Thông tin học kì"
                des="Lưu"
              >
                <p>This is the modal content.</p>
              </MyModal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="info-section">
      <span class="info-section__title">Thông tin khối lớp học</span>
      <div class="accordion">
        <div
          class="accordion__item"
          v-for="(grade, index) in grades"
          :key="index"
          :class="{ active: grade.active }"
        >
          <div class="accordion__header">
            <div class="header_classname">{{ grade.name }}</div>
            <div>
              <i
                class="fa-solid fa-circle-plus"
                @click="openModal(grade.name)"
              ></i
              >&nbsp;&nbsp;
              <i
                class="fa-solid fa-chevron-down"
                @click="toggleAccordion(index)"
              ></i>
            </div>
            <MyModalclass
              :isVisible="showModalclass"
              @save="showModalclass = false"
              title="Tạo lớp học"
              des="Khởi tạo"
              :className="currentGradeName"
            >
            </MyModalclass>
          </div>
          <div class="accordion__content">
            <table class="info-table">
              <thead class="info-table__thead">
                <tr class="info-table__header-row">
                  <th class="info-table__header-cell-too updheader">
                    Mã lớp học
                  </th>
                  <th class="info-table__header-cell-too">Tên lớp học</th>
                  <th class="info-table__header-cell-too">Sĩ số</th>
                  <th class="info-table__header-cell-too">
                    Giáo viên chủ nhiệm
                  </th>
                  <th class="info-table__header-cell-too updheader">
                    Tuỳ chọn
                  </th>
                </tr>
              </thead>
              <tbody
                class="info-table__body"
                v-for="(item, index) in classdata"
                :key="index"
              >
                <tr class="info-table__row">
                  <td class="info-table__cell_cl">{{ item.Malop }}</td>
                  <td class="info-table__cell_cl">{{ item.Tenlop }}</td>
                  <td class="info-table__cell_cl">{{ item.siso }}</td>
                  <td class="info-table__cell_cl">
                    {{ item.TenGV }}
                  </td>
                  <td class="info-table__cell_cl">
                    <button class="info-table__icon">
                      <i class="fa-regular fa-eye"></i>
                    </button>
                    <button
                      class="info-table__icon"
                      @click="showModalifclass = true"
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button class="info-table__icon">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <MyModalIfClass
            :isVisible="showModalifclass"
            @save="showModalifclass = false"
            title="Thông tin lớp học"
            des="Lưu"
          >
          </MyModalIfClass>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from "./MyCalendar.vue";
import MyModalclass from "@/components/myModalclass.vue";
import MyModal from "@/components/myModal.vue";
import MyModalIfClass from "@/components/myModalIfClass.vue";
import MyModalCategoryQD from "./myModalCategoryQD.vue";
import MyModalCategoryPS from "./myModalCategoryPS.vue";
export default {
  name: "studentManager",
  data() {
    return {
      date: null,
      showModal: false,
      showModalclass: false,
      showModalifclass: false,
      showCategoryQD: false,
      showCategoryPS: false,
      data: [
        {
          "Mã học kì": 1,
          "Tên học kì": "học kì 1",
          "Hệ số điểm": 1,
          "Ngày bắt đầu": "05/09/2008",
          "Ngày kết thúc": "21/01/2009",
        },
        {
          "Mã học kì": 1,
          "Tên học kì": "học kì 1",
          "Hệ số điểm": 1,
          "Ngày bắt đầu": "05/09/2008",
          "Ngày kết thúc": "21/01/2009",
        },
        {
          "Mã học kì": 1,
          "Tên học kì": "học kì 1",
          "Hệ số điểm": 1,
          "Ngày bắt đầu": "05/09/2008",
          "Ngày kết thúc": "21/01/2009",
        },
        {
          "Mã học kì": 1,
          "Tên học kì": "học kì 1",
          "Hệ số điểm": 1,
          "Ngày bắt đầu": "05/09/2008",
          "Ngày kết thúc": "21/01/2009",
        },
      ],
      classdata: [
        { Malop: 50804, Tenlop: "10A", siso: 45, TenGV: "Nguyễn Kim Trang" },
        { Malop: 50805, Tenlop: "10B", siso: 45, TenGV: "Nguyễn mạnh kim" },
        { Malop: 50806, Tenlop: "10C", siso: 45, TenGV: "Tran mạnh hung" },
        { Malop: 50807, Tenlop: "10D", siso: 45, TenGV: "lâm ti phông" },
      ],
      grades: [
        { name: "Khối 10", active: false },
        { name: "Khối 11", active: false },
        { name: "Khối 12", active: false },
      ],
    };
  },
  components: {
    MyModal,
    MyModalclass,
    MyModalIfClass,
    calendar,
    MyModalCategoryQD,
    MyModalCategoryPS,
  },
  methods: {
    toggleAccordion(index) {
      this.grades[index].active = !this.grades[index].active;
    },
    openModal(name) {
      this.currentGradeName = name;
      this.showModalclass = true;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.info-section {
  margin-bottom: 40px;
}

.info-section__title {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1em;
  text-align: left;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 7px 17px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  overflow: hidden;
}

.info-table__thead {
  background-color: #ffffff;
}

.info-table__header-row {
  background-color: #ffffff;
}

.info-table__header-cell {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  text-align: center;
}
.info-table__header-cell-too {
  padding: 10px;
  font-weight: bold;
  text-align: center;
}

.info-table__body {
  background-color: #fff;
}

.info-table__row {
}
.updheader {
  width: 130px;
  padding-left: 0px !important;
}
.header_classname {
  padding-left: 7px;
}
.info-table__cell,
.info-table__bt {
  padding: 10px;
}

.info-table__icon {
  margin-right: 5px;
  cursor: pointer;
}

i.fa-regular.fa-eye,
.fa-regular.fa-pen-to-square,
.fa-trash-can {
  color: rgba(0, 95, 249, 1);
}

/* Accordion Styles */
.accordion {
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
}

.accordion__item {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}

.accordion__header {
  padding: 10px;
  font-size: 1.2em;
  background-color: #f0f0f0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion__header i {
  transition: transform 0.3s ease;
}

.accordion__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}

.accordion__item.active .accordion__content {
  max-height: 1000px;
  opacity: 1;
}

.accordion__item.active .accordion__header i.fa-chevron-down {
  transform: rotate(180deg);
}

/*  */
.info_col-item {
  width: 100%;
  border-collapse: collapse;
  box-shadow: -2px 1px 12px 7px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  overflow: hidden;
}
.info-section_box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  gap: 85px;
}
.info-section_col {
  width: 40%;
  display: flex;
  gap: 53px;
  flex-direction: column;
}
.info_col-item {
  width: 100%;
  border-collapse: collapse;
  box-shadow: -2px 1px 12px 7px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 49% 89% 0%;
  padding: 20px;
}
.section_item {
  border-collapse: collapse;
  box-shadow: 0 7px 17px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  overflow: hidden;
  width: 60% !important;
  padding: 17px;
}
.info-item_des {
  font-size: 18px;
}
.modal-fade-enter-active {
  transition: all 0.3s ease-out;
}
.modal-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.modal-fade-enter,
.modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
