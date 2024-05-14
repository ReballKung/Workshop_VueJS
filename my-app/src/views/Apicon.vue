<template>
    <div>
        <v-btn color="success" @click="newItem()">NewItem</v-btn>
        <v-row>
            <div v-for="(item, index) in apiData" :key="index" >
                <v-col cols="12">
                    <v-card width="300">
                        <v-img src="../assets/home-820389_1920.jpg" />
                        <v-card-title primary-title>
                            <span>{{ item.productName }}</span>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="info" @click="editItem(item)">edit</v-btn>
                            <v-btn color="red darken-1" @click="saveDelete(item._id)">delete</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </div>
        </v-row>

        <v-dialog
            v-model="dialogedit"
            max-width="500px"
        >
            <v-card>
                <v-card-title primary-title>
                    {{ savemode }}
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
                                label="ประเภทสินค้า" 
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
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="closeData()">cancel</v-btn>
                    <v-btn text color="info" @click="saveSelect()">save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id : '' ,
            apiData: [],
            dialogedit : false,
            postdata: { //ชุดที่เอาไว้ส่งข้อมูล
                productName : '' ,
                type : '' ,
                price : '' ,
                stock : ''
            },
            postdefault : { //ชุดที่ล้างไว้ส่งข้อมูล
                productName : '' ,
                type : '' ,
                price : '' ,
                stock : ''
            },
        }
    },
    created() {
        this.getdata()
    },
    computed: {
        savemode() {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },
    methods: {
        newItem() {
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = true
        },
        editItem(item) {
            this.id = item._id
            this.postdata = item
            this.dialogedit = true
        },
        closeData(){
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = false 
        },
        saveSelect(){
            if (this.id != '') {
                this.savePutdata()
            } else this.savePostdata()
        },
        // API ZONE
        getdata() {
            this.axios.get("http://localhost:3000/api/v1/products/").then((res) => {
                console.log('data from api', res.data)
                this.apiData = res.data.data
            });
        },
        async savePostdata() {
            try {
                const {data} = await this.axios.post('http://localhost:3000/api/v1/products/', this.postdata)
                console.log(data);
                alert('create complete')
                this.getdata()
                this.closeData()
            } catch (error) {
                console.log(error);
                alert('error')
            }
        },
        async savePutdata() {
            try {
                const {data} = await this.axios.put('http://localhost:3000/api/v1/products/'+ this.id ,this.postdata)
                console.log(data);
                alert('update complete')
                this.getdata()
                this.closeData()
            } catch (error) {
                console.log(error);
                alert('error')
            }
        },
        async saveDelete(item) {
            try {
                const {data} = await this.axios.delete('http://localhost:3000/api/v1/products/'+item)
                console.log(data);
                alert('delelte complete')
                this.getdata()
                this.closeData()
            } catch (error) {
                console.log(error);
                alert('error')
            }
        }
        
    },
    
}
</script>

<style></style>