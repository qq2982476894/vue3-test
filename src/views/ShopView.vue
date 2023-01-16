<template>
  <div class="card">
    <table>
      <thead>
        <tr class="tr">
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr" v-for="item in goodsList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <button @click="addOrReduce('add', item)">+</button>
            {{ item.num }}
            <button @click="addOrReduce('reduce', item)">-</button>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.num * item.price }}</td>
          <td><button @click="del(item)">删除</button></td>
        </tr>
        <tr class="tr">
          <td><button @click="addGood">+</button></td>
          <td>{{ totalNum }}</td>
          <td></td>
          <td>{{ total }}</td>
          <td><button @click="over">结算</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
type GoodsList = {
  readonly id: number;
  name: string;
  num: number;
  price: number;
};
const goodsList: GoodsList[] = reactive([
  {
    id: 1,
    name: "衣服",
    num: 1,
    price: 1000,
  },
  {
    id: 2,
    name: "裤子",
    num: 1,
    price: 2000,
  },
  {
    id: 3,
    name: "鞋子",
    num: 1,
    price: 2000,
  },
]);
const addOrReduce = (type: string, item: GoodsList): void => {
  if (type === "add" && item.num < 99) {
    item.num += 1;
  }
  if (type === "reduce" && item.num > 0) {
    item.num -= 1;
  }
};
const del = (item: GoodsList) => {
  const index = goodsList.findIndex((ele) => {
    return ele.id === item.id;
  });
  goodsList.splice(index, 1);
};
let id = 4;
const addGood = () => {
  id++;
  const goods: GoodsList = {
    id: id,
    name: "食物",
    num: 1,
    price: 500,
  };
  goodsList.push(goods);
};
const over = () => {
  alert(`傻波一，共消费${total.value}元`);
};
const total = computed(() => {
  let total = 0;
  goodsList.forEach((item) => {
    total += item.num * item.price;
  });
  return total;
});
const totalNum = computed(() => {
  let totalNum = 0;
  goodsList.forEach((element) => {
    totalNum += element.num;
  });
  return totalNum;
});
</script>

<style scoped>
.card {
  height: 400px;
  overflow-y: scroll;
}
table {
  width: 100%;
  height: 100%;
  text-align: center;
  border-collapse: collapse;
  border: 0.5px solid #333;
}
.tr {
  border: none;
  border-bottom: 0.5px solid #333;
  height: 50px;
}
</style>
