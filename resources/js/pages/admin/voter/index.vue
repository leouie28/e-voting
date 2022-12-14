<template>
    <div>
        <v-card elevation="2" class="pa-2">
            <table-header
            :data="data"
            @addNew="addNew"
            @refresh="fetchPage"
            @importExcel="importExcel"
            @search="fetchPage"
            :hide="['filter', 'download']">
                <template v-slot:custom_filter>
                    <admin-filter :filter="data.filter"></admin-filter>
                </template>
            </table-header>
            <v-data-table
            :headers="headers"
            :items="records"
            :search="data.keyword"
            show-select
            :loading="data.isFetching"
            :server-items-length="total"
            :footer-props="footerPages"
            :options.sync="options"
            :items-per-page="options.itemsPerPage"
            @update:options="fetchPage"
            @click:row="viewProduct"
            class="cursor-pointer table-fix-height"
            fixed-header>
                <!-- <template v-slot:[`item.name`]="{ item }">
                    <v-avatar size="35" style="border: 1px solid #ccc">
                        <img
                        alt="image"
                        :src="item.images.length?'/images/customer/' + item.images[0].file_name:'/images/default/person.png'"
                        />
                    </v-avatar>
                    {{ item.first_name+ ' '+item.last_name }}
                </template> -->
                <template v-slot:[`item.voted`]="{ item }">
                    <v-chip color="error" small>No</v-chip>
                </template>
                <template v-slot:[`item.created_at`]="{ item }">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </template>
                <template v-slot:[`item.active`]="{ item }">
                    <v-switch
                    v-model="item.active"
                    color="success"
                    inset
                    :label="item.active?'Active':'Inactive'"
                    ></v-switch>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                    <v-btn
                        class="px-2"
                        elevation="0"
                        icon
                        color="primary"
                        @click="editItem(item)"
                    >
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-btn
                        class="px-2"
                        elevation="0"
                        icon
                        color="error"
                        @click="warning(item)"
                    >
                        <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                </template>
                <template v-slot:no-data>
                    <div>No Data</div>
                </template>
            </v-data-table>
        </v-card>
        <data-form :show="form" @close="close" @save="save"></data-form>
        <excel-form :show="excelForm" @close="close" @save="save"></excel-form>
    </div>
</template>

<script>
import DeleteDialog from "@/components/deleteDialog.vue";
import DataForm from "./form.vue";
import ExcelForm from "./excel-form.vue";
import TableHeader from "@/components/table-header.vue";
export default {
    components: {
        DeleteDialog,
        DataForm,
        ExcelForm,
        TableHeader,
    },
    data: () => ({
        form: false,
        excelForm: false,
        data: {
            title: "Voters",
            isFetching: false,
            keyword: "",
            filter: {},
        },
        footerPages: {
            "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1],
        },
        options: {
            itemsPerPage: 15,
        },
        total: 0,
        deleteForm: false,
        showForm: false,
        dialogDelete: false,
        items: [],
        selectedItem: {},
        selected: [],
        headers: [
            {
                text: "Student Id",
                align: "start",
                sortable: true,
                value: "student_id",
            },
            {
                text: "Name",
                align: "start",
                sortable: true,
                value: "name",
            },
            {
                text: "Voted",
                align: "start",
                sortable: true,
                value: "voted",
            },
            {
                text: "Date Added",
                align: "start",
                sortable: false,
                value: "created_at",
            },
            {
                text: "Active",
                align: "start",
                sortable: true,
                value: "active",
            },
            {
                text: "Actions",
                align: "center",
                sortable: false,
                value: "action",
            },
        ],
    }),
    methods: {
        fetchPage() {
            this.data.isFetching = true;
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter);
            if (this.data.keyword) params = params + "&keyword=" + this.data.keyword;
            axios.get(`/admin-api/student?${params}`).then(({ data }) => {
                this.records = data.data;
                this.total = data.total;
                this.data.isFetching = false;
            });
        },
        editItem(val){
            console.log(this.alert.trigger,'trigger')
            this.selectedItem = val
            this.showForm = true
        },
        save(payload) {
            this.form = false
            console.log(payload)
            axios.post(`/admin-api/student`, payload).then(({ data }) => {
                this.fetchPage()
                this.newAlert(true, data.type, data.message)
            }).finally(()=>{
                this.showForm = false;
                this.payload = null;
            })
        },
        update(payload) {
            axios.put(`/admin-api/customer/${this.selectedItem.id}`, payload).then(({ data }) => {
                this.showForm = false;
                this.fetchPage()
                this.newAlert(true, data.type, data.message)
                this.payload = null;
            })
        },
        importExcel() {
            this.excelForm = true
        },
        close() {
            this.form = false
            this.excelForm = false
        },
        warning(val){
        this.user = {
            id: val.id,
            text: val.first_name+' '+val.last_name,
            model: 'customer'
        }
        this.deleteForm = true
        },
        confirm() {
        axios.delete(`/admin-api/${this.user.model}/${this.user.id}`).then(({data})=>{
            this.deleteForm = false
            this.fetchPage()
            this.newAlert(true, data.type, data.message)
        });
        }
    },
};
</script>