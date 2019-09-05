<template>
  <div style="background:#fff">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px">
      <el-form-item label="审批人">
        <el-input size="small" clearable v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker size="small" type="date" v-model="formInline.date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select size="small" clearable v-model="formInline.user" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker size="small" type="date" v-model="formInline.date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select size="small" clearable v-model="formInline.user" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审批姓名">
        <el-select size="small" clearable v-model="formInline.user" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <div style="float:right">
        <el-button size="small" type="primary" @click="onSubmit">查询</el-button>
        <el-button size="small" @click="onCancel">重置</el-button>
      </div>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="508"
      size="small"
      highlight-current-row
      show-summary
      @row-click="rowClick"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="100"></el-table-column>
      <el-table-column prop="sex" label="性别" width="100"></el-table-column>
      <el-table-column prop="work" label="工作" width="120"></el-table-column>
      <el-table-column prop="lang" label="语言" width="100"></el-table-column>
      <el-table-column prop="workYear" label="工作年限" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Table',
  data () {
    return {
      tableData: [],
      total: 0,
      pageSize: 0,
      pageIndex: 1,
      formInline: {
        user: '',
        region: '',
        date: ''
      }
    }
  },
  methods: {
    getTableData () {
      axios.get('/api/tableDate.json').then(
        this.getTableDataSucc)
    },
    getTableDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.tableData = data.tableData.slice(0, 10)
        this.total = data.tableData.length
      }
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    rowClick (val) {
      this.$refs.multipleTable.toggleRowSelection(val)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageIndex = val
    },
    onSubmit () {
      console.log('submit!')
    },
    onCancel () {
      console.log('cancel!')
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>

<style scoped>
  .el-pagination{
    background-color: #fff;
    padding: 10px;
  }
  .demo-form-inline{
    padding: 15px 15px 0 15px;
  }
</style>
