<template>
    <div>
        <div class="card-select">
            <v-card width="300" outlined>
                <v-list>
                    <v-list-group prepend-icon="mdi-laptop">
                        <template v-slot:activator>
                            <v-list-item-title>ยี่ห้อแล็ปท็อป</v-list-item-title>
                        </template>
                    </v-list-group>
                    <v-list-group :value="true" prepend-icon="mdi-laptop" no-action>
                        <template v-slot:activator>
                            <v-list-item-title>สำหรับพนักงาน</v-list-item-title>
                        </template>
                        <v-list-item @click="newItem()" >
                            <v-list-item-title >เพิ่มข้อมูลสินค้า</v-list-item-title>
                            <v-list-item-icon >
                                <v-icon color="success">mdi-plus-box</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-card>
        </div>
        <v-dialog
            v-model="dialogedit"
            max-width="500px"
        >
            <v-card>
                <v-card-title primary-title>
                    เพิ่มข้อมูลสินค้า
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ชื่อสินค้า" 
                                id="" 
                                v-model="postdata.productName">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="รายละเอียดสินค้า" 
                                id="" 
                                v-model="postdata.type">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ราคา" 
                                id="" 
                                v-model="postdata.price">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ยอดคงเหลือ" 
                                id="" 
                                v-model="postdata.stock">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ลิงค์รูปภาพ" 
                                id="" 
                                v-model="postdata.urlImg">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="closeData()">ยกเลิก</v-btn>
                    <v-btn text color="info" @click="savePostdata()">บันทึก</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {EventBus } from '@/EventBus'
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            id: '' ,
            dialogedit : false,
            postdata: { //ชุดที่เอาไว้ส่งข้อมูล
                productName : '' ,
                type : '' ,
                price : '' ,
                stock : '',
                urlImg : ''
            },
            postdefault : { //ชุดที่ล้างไว้ส่งข้อมูล
                productName : '' ,
                type : '' ,
                price : '' ,
                stock : '',
                urlImg : ''
            },
        }
    },
    methods: {
        getProductData() {
            EventBus.$emit('getProductData')
        },
        newItem() {
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = true
        },
        closeData(){
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = false 
        },
        async savePostdata() {
            try {
                const {data} = await this.axios.post('http://localhost:3000/api/v1/products/', this.postdata)
                console.log(data);
                await Swal.fire({
                    title: "เพิ่มสินค้าเสร็จสิ้น",
                    // text: "You clicked the button!",
                    icon: "success"
                });
                // alert('create complete')
                await this.getProductData();
                await this.closeData();
            } catch (error) {
                console.log(error);
                // alert('error')
            }
        },
    }
}
</script>

<style>
.card-select {
    margin-top: 20px;
}
</style>