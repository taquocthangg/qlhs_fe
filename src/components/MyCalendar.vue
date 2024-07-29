<template>
  <div class="calendar-container">
    <div class="calendar">
      <div class="calendar-header">
        <span class="prev" @click="prevMonth">&#10094;</span>
        <span class="month-year"
          >{{ months[currentMonth] }} {{ currentYear }}</span
        >
        <span class="next" @click="nextMonth">&#10095;</span>
      </div>
      <div class="weekdays">
        <span v-for="day in daysOfWeek" :key="day" class="day">{{ day }}</span>
      </div>
      <div class="days">
        <span
          v-for="day in daysInMonth"
          :key="day"
          :class="['day', { 'day-active': isSelected(day) }]"
          @click="selectDay(day)"
        >
          {{ day }}
        </span>
      </div>
    </div>

    <div class="clock">
      <div class="clock-time">{{ currentTime }}</div>
      <!-- <div class="clock-img"></div> -->
      <img
        src="../assets/z5570905754860_f43563fe40e6c1a6d869effc58e14598.jpg"
        alt="Image"
        class="clock-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MYcalendar",
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null,
      daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      intervalId: null,
      currentTime: this.getCurrentTime(),
    };
  },
  computed: {
    daysInMonth() {
      const daysInMonth = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();
      return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    },
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDay(day) {
      this.selectedDate = day;
    },
    isSelected(day) {
      return day === this.selectedDate;
    },
    getCurrentTime() {
      const offset = 7; // UTC+7
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const newDate = new Date(utc + 3600000 * offset);
      return newDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
}

.calendar {
  background-color: #ffffff;
  width: 66%;
  border-radius: 8px;
  padding: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* border: 3px solid #b69c9c; */
  height: 281px;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.month-year {
  font-size: 18px;
  font-weight: bold;
}

.weekdays {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #e0e0e0;
  border-radius: 6px;
}

.day {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #666;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.day-active {
  background-color: #cc0000;
  color: white;
  border-radius: 50%;
}

.clock {
  margin-left: 20px; /* Adjust position */
  flex: 1; /* Take remaining space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.clock-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.clock-time {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
.clock-image {
  margin-top: 10px;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
