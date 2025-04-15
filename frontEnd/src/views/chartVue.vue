<template>
  <div class="flex">
    <div class="chart-container">
      <h2>Yillar bo'yicha ko'rsatkichlar</h2>

      <div class="chart">
        <div class="y-axis">
          <div v-for="value in yAxisValues" :key="value" class="y-axis-label">
            {{ value }}
          </div>
        </div>

        <div class="bars-container">
          <div v-for="item in chartData" :key="item.year" class="bar-item">
            <div
              class="bar"
              :style="{ height: calculateHeight(item.value) + '%' }"
            >
              <span class="bar-value">{{ item.value }}</span>
            </div>
            <div class="x-axis-label">{{ item.year }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[48%]">
        <Card/>
    </div>

  </div>
</template>

<script setup>
import Card from "../components/cardUiProgres.vue";
import { ref, computed } from "vue";


const chartData = ref([
  { year: "1991", value: 30 },
  { year: "1992", value: 40 },
  { year: "1993", value: 35 },
  { year: "1994", value: 50 },
  { year: "1995", value: 49 },
  { year: "1996", value: 60 },
  { year: "1997", value: 70 },
  { year: "1998", value: 91 },
  { year: "1999", value: 125 },
]);

const maxValue = 140; // Maksimal y qiymati
const yAxisStep = 20; // Y o'qi qadami

const yAxisValues = computed(() => {
  const values = [];
  for (let i = maxValue; i >= 0; i -= yAxisStep) {
    values.push(i);
  }
  return values;
});

// Balandlikni % da hisoblash
function calculateHeight(value) {
  return (value / maxValue) * 100;
}
</script>

<style scoped>
.chart-container {
  width: 50%;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


h2 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.chart {
  height: 300px;
  display: flex;
  position: relative;
  padding-bottom: 30px;
}

.y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  padding-right: 10px;
  text-align: right;
}

.y-axis-label {
  font-size: 12px;
  color: #666;
}

.bars-container {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding-top: 10px;
  height: 100%;
}

.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}

.bar {
  width: 60%;
  background-color: #2196f3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  transition: height 0.5s ease;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.bar-value {
  position: absolute;
  top: -20px;
  color: #333;
  font-size: 12px;
  font-weight: bold;
}

.x-axis-label {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}
</style>
