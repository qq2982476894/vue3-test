<template>
  <div>
    <button @click="downXlsx">导出勾选字段</button>
    <div>
      <a-checkbox
        v-model:checked="state.checkAll"
        :indeterminate="state.indeterminate"
        @change="onCheckAllChange"
      >
        全选
      </a-checkbox>
    </div>
    <a-checkbox-group
      v-model:value="state.checkedList"
      :options="plainOptions"
    />
    <a-table :dataSource="state.list" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { jsonToExcel } from "@/hooks/useXlsx";
import { reactive } from "vue";
const columns = [
  {
    title: "主键id",
    dataIndex: "id",
  },
  {
    title: "市州",
    dataIndex: "cityName",
  },
  {
    title: "区县",
    dataIndex: "areaName",
  },
  {
    title: "地块编码",
    dataIndex: "code",
  },
];

//映射表头
const header: Record<string, any> = {
  analysisSourceType: "分析来源", //	，1：自动分析，2：手动录入	integer
  areaName: "区县", //		string
  cityName: "市州", //		string
  code: "地块编码", //		string
  createBy: "创建者", //		string
  createTime: "创建时间", //		string
  exceedIndex: "超标指标", //		string
  exceedMultiple: "超标倍数", //		string
  id: "主键id", //		integer
  monitorSoilId: "布点id", //		integer
  pointCode: "点位编码", //		string
  pointType: "点位类型", //		string
  samplingTime: "采样时间", //		Data
  soilId: "土壤id", //		integer
  soilName: "地块名称", //		string
  soilType: "地块类型", //	，1：关闭，2：填埋，3：尾矿库，4：在产	string
  type: "检测标准", //	，1：筛选值，2：管制值	integer
  updateBy: "修改者", //		string
  updateTime: "最后修改时间", //		string
};
type Option = {
  label: "string";
  value: string | number;
};

//多选框数组
const plainOptions: Option[] = [];
for (const key in header) {
  plainOptions.push({ label: header[key], value: key });
}

interface State {
  indeterminate: boolean;
  checkAll: boolean;
  checkedList: string[];
  slectField: any[];
  list: any[];
}
const state = reactive<State>({
  indeterminate: true,
  checkAll: false, //是否全选
  checkedList: [], //选中的字段属性数组
  slectField: [], //要导出的数组
  list: [
    {
      id: 11,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: "铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-12 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2022-12-26 00:00:00",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 15,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: "铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-12 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2022-12-29 16:32:22",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 19,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: null,
      exceedMultiple: null,
      samplingTime: null,
      type: 2,
      analysisSourceType: null,
      createBy: null,
      createTime: null,
      updateBy: null,
      updateTime: null,
    },
    {
      id: 25,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: "铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-12 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:06:44",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 29,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: "铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-12 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:12:12",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 33,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: "铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-12 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:14:52",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 37,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 4,
      pointCode: "11",
      pointType: "2",
      exceedIndex: "铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-12 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:18:17",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 43,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 7,
      pointCode: "111",
      pointType: "2",
      exceedIndex: "铜,铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-14 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:18:17",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 45,
      soilId: 2,
      soilName: "土壤2",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "1",
      code: "13345",
      monitorSoilId: 8,
      pointCode: "333",
      pointType: "2",
      exceedIndex: null,
      exceedMultiple: "0",
      samplingTime: null,
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:18:17",
      updateBy: null,
      updateTime: null,
    },
    {
      id: 47,
      soilId: 12,
      soilName: "土壤12",
      cityName: "成都市",
      areaName: "锦江区",
      soilType: "2",
      code: "13345",
      monitorSoilId: 9,
      pointCode: "333",
      pointType: "2",
      exceedIndex: "铜,铅",
      exceedMultiple: "0.19",
      samplingTime: "2022-12-14 00:00:00",
      type: 2,
      analysisSourceType: 1,
      createBy: null,
      createTime: "2023-01-06 13:18:17",
      updateBy: null,
      updateTime: null,
    },
  ], //基础数据
});

//全选
const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions.map((item) => item.value) : [],
    indeterminate: false,
  });
};
const downXlsx = () => {
  jsonToExcel({ list: state.slectField, header });
};
watch(
  () => state.checkedList,
  (val) => {
    state.indeterminate = !!val.length && val.length < plainOptions.length;
    state.checkAll = val.length === plainOptions.length;
    state.slectField = state.list.map((item) => {
      const obj: Record<string, any> = {};
      val.forEach((key) => {
        obj[key] = item[key];
      });
      return obj;
    });
  },
  { immediate: true }
);
</script>

<style scoped></style>
